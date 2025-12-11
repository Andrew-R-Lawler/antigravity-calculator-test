package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CalculatorRequest struct {
	Num1     float64 `json:"num1"`
	Num2     float64 `json:"num2"`
	Operator string  `json:"operator"`
}

type CalculatorResponse struct {
	Result float64 `json:"result"`
	Error  string  `json:"error,omitempty"`
}

func main() {
	r := gin.Default()

	// CORS Middleware
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Calculator Backend is Running. Use POST /calculate endpoint."})
	})

	r.POST("/calculate", func(c *gin.Context) {
		var req CalculatorRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var result float64
		var err error

		switch req.Operator {
		case "+":
			result = req.Num1 + req.Num2
		case "-":
			result = req.Num1 - req.Num2
		case "*":
			result = req.Num1 * req.Num2
		case "/":
			if req.Num2 == 0 {
				c.JSON(http.StatusBadRequest, gin.H{"error": "Division by zero"})
				return
			}
			result = req.Num1 / req.Num2
		default:
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid operator"})
			return
		}

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, CalculatorResponse{Result: result})
	})

	fmt.Println("Server running on port 8080")
	r.Run(":8080")
}
