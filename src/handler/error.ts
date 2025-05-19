export interface ErrorResponse {
    message: string;
    statusCode?: number;
}

export const Unauthorized: ErrorResponse = {
    message: "You are not authorized to perform this action.",
    statusCode: 401
};

export const WrongPassword: ErrorResponse = {
    message: "The password you entered is incorrect. Please try again.",
    statusCode: 400
};

export const EmailNotRegistered: ErrorResponse = {
    message: "This email address is not registered with us. Please check and try again.",
    statusCode: 400
};

export const EmailAlreadyExists: ErrorResponse = {
    message: "This email address is already registered. Please use a different email or log in with the existing one.",
    statusCode: 400
};

export const ProvideToken: ErrorResponse = {
    message: "Please provide token",
    statusCode: 401
}

export const BearerToken: ErrorResponse = {
    message: "Not a bearer token",
    statusCode: 400
}

export const InvalidToken: ErrorResponse = {
    message: "Invalid token",
    statusCode: 401
}

