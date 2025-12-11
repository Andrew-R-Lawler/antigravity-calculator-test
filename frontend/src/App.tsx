import { useState } from 'react';
import { Calculator } from './components/Calculator';
import './index.css';

function App() {
    const [display, setDisplay] = useState('');
    const [num1, setNum1] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

    const calculateResult = async (n1: string, n2: string, op: string): Promise<string | null> => {
        try {
            const response = await fetch('http://localhost:8080/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    num1: parseFloat(n1),
                    num2: parseFloat(n2),
                    operator: op,
                }),
            });
            const data = await response.json();
            if (data.error) return 'Error';
            return String(data.result);
        } catch (error) {
            console.error('Error:', error);
            return 'Error';
        }
    };

    const handleDigit = (digit: string) => {
        if (shouldResetDisplay) {
            setDisplay(digit);
            setShouldResetDisplay(false);
        } else {
            setDisplay((prev) => (prev === '0' && digit !== '.' ? digit : prev + digit));
        }
    };

    const handleOperator = async (op: string) => {
        if (!display) return;

        if (num1 && operator && !shouldResetDisplay) {
            // Chaining: Calculate intermediate result
            const result = await calculateResult(num1, display, operator);
            if (result) {
                setDisplay(result);
                setNum1(result);
            } else {
                setNum1(display); // Fallback if error, roughly keeps state
            }
        } else {
            setNum1(display);
        }

        setOperator(op);
        setShouldResetDisplay(true);
    };

    const handleClear = () => {
        setDisplay('');
        setNum1(null);
        setOperator(null);
        setShouldResetDisplay(false);
    };

    const handleEqual = async () => {
        if (!num1 || !operator) return;

        const result = await calculateResult(num1, display, operator);
        if (result) {
            setDisplay(result);
            setNum1(null);
            setOperator(null);
            setShouldResetDisplay(true);
        }
    };

    return (
        <>
            <h1 style={{ color: 'white', marginBottom: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                Agentic Calculator Test
            </h1>
            <Calculator
                display={display}
                onDigit={handleDigit}
                onOperator={handleOperator}
                onClear={handleClear}
                onEqual={handleEqual}
            />
        </>
    );
}

export default App;
