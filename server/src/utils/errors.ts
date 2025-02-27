import {StatusType} from '#utils/types/statusTypes';

export class NotFoundError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'NotFoundError';
    this.message = message;
    this.status = status;
  }
}

export class ForbiddenError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'ForbiddenError';
    this.message = message;
    this.status = status;
  }
}

export class ValidationError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'ValidationError';
    this.message = message;
    this.status = status;
  }
}

export class AuthorizationError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'AuthorizationError';
    this.message = message;
    this.status = status;
  }
}

export class InternalServerError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'InternalServerError';
    this.message = message;
    this.status = status;
  }
}

export class BadRequestError extends Error {
  private status: StatusType;
  constructor(status: StatusType, message: string) {
    super();
    this.name = 'BadRequestError';
    this.message = message;
    this.status = status;
  }
}
