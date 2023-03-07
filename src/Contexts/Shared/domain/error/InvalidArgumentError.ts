import { DomainError } from './DomainError';

export class InvalidArgumentError extends DomainError {

  static withMessage(message: string): InvalidArgumentError {
    return new InvalidArgumentError(message);
  }
}
