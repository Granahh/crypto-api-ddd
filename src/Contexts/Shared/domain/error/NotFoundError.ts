import { DomainError } from './DomainError';

export class NotFoundError extends DomainError {

  static withMessage(message: string): NotFoundError {
    return new NotFoundError(message);
  }
}
