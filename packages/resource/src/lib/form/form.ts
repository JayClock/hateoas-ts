import { Field } from './field.js';

/**
 * Represents a hypermedia form (HAL-Forms template).
 *
 * Forms describe available actions on a resource, including the target URI,
 * HTTP method, content type, and required/optional fields.
 *
 * @see {@link Action} for executable form wrapper
 * @see {@link Field} for form field definitions
 *
 * @category Other
 */
export type Form = {
  /**
   * Target URI for form submission.
   */
  uri: string;

  /**
   * Form/action name (sometimes called 'rel').
   */
  name: string;

  /**
   * Human-readable form title.
   */
  title?: string;

  /**
   * HTTP method for submission (e.g., 'POST', 'PUT', 'DELETE').
   */
  method: string;

  /**
   * Content-Type for the form submission body.
   */
  contentType: string;

  /**
   * Available form fields.
   */
  fields: Field[];

  /**
   * Non-standard HAL-FORMS template members preserved from the backend.
   *
   * This is where control-plane hints such as x-available, x-blockedBy,
   * x-effects, and x-returns are exposed without changing the HAL-FORMS shape.
   */
  extensions?: Record<string, unknown>;
};
