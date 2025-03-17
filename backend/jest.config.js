module.exports ={
    preset: 'ts-jest',
    testEnviroment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};