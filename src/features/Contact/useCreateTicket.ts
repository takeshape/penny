import { useMutation } from '@apollo/client';
import { CreateTicketWithGorgiasMutation } from 'features/Contact/queries';
import { CreateTicketWithGorgiasMutationResponse, CreateTicketWithGorgiasMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';

export type CreateTicketVariables = CreateTicketWithGorgiasMutationVariables;
export type CreateTicketResponse = CreateTicketWithGorgiasMutationResponse;

const CreateTicketMutation = CreateTicketWithGorgiasMutation;

/**
 * Wraps a createTicket mutation, so that the provider can be configured more easily.
 */
export function useCreateTicket() {
  return useMutation<CreateTicketResponse, CreateTicketVariables>(CreateTicketMutation);
}

/**
 * For logged-in users only. Makes an authenticated createTicket request to TakeShape, bypassing the reCaptcha requirement.
 */
export function useAuthenticatedCreateTicket() {
  return useAuthenticatedMutation<CreateTicketResponse, Omit<CreateTicketVariables, 'recaptchaToken'>>(
    CreateTicketMutation
  );
}
