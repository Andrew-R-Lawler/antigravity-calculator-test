import React from 'react';

interface CalculatorProps {
    display: string;
    onDigit: (digit: string) => void;
    onOperator: (op: string) => void;
    onClear: () => void;
    onEqual: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
    display,
    onDigit,
    onOperator,
    onClear,
    onEqual,
}) => {
    const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    const operators = ['+', '-', '*', '/'];

    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            width: '300px',
        }}>
            <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontSize: '2.5rem',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'right',
                marginBottom: '20px',
                minHeight: '40px',
                overflowX: 'auto'
            }}>
                {display || '0'}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                <button
                    onClick={onClear}
                    style={{ gridColumn: 'span 2', ...btnStyle, background: '#ff5f57' }}
                >
                    AC
                </button>
                <button onClick={() => onOperator('/')} style={{ ...btnStyle, background: '#ffbd2e' }}>/</button>
                <button onClick={() => onOperator('*')} style={{ ...btnStyle, background: '#ffbd2e' }}>*</button>

                <button onClick={() => onDigit('7')} style={btnStyle}>7</button>
                <button onClick={() => onDigit('8')} style={btnStyle}>8</button>
                <button onClick={() => onDigit('9')} style={btnStyle}>9</button>
                <button onClick={() => onOperator('-')} style={{ ...btnStyle, background: '#ffbd2e' }}>-</button>

                <button onClick={() => onDigit('4')} style={btnStyle}>4</button>
                <button onClick={() => onDigit('5')} style={btnStyle}>5</button>
                <button onClick={() => onDigit('6')} style={btnStyle}>6</button>
                <button onClick={() => onOperator('+')} style={{ ...btnStyle, background: '#ffbd2e' }}>+</button>

                <button onClick={() => onDigit('1')} style={btnStyle}>1</button>
                <button onClick={() => onDigit('2')} style={btnStyle}>2</button>
                <button onClick={() => onDigit('3')} style={btnStyle}>3</button>
                <button
                    onClick={onEqual}
                    style={{ gridRow: 'span 2', ...btnStyle, background: '#28c840' }}
                >
                    =
                </button>

                <button onClick={() => onDigit('0')} style={{ gridColumn: 'span 2', ...btnStyle }}>0</button>
                <button onClick={() => onDigit('.')} style={btnStyle}>.</button>
            </div>
        </div>
    );
};

const btnStyle: React.CSSProperties = {
    padding: '15px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    transition: 'background 0.2s',
};
