import { contactProvider } from '@/config';
import { CreateTicketWithGorgiasMutation, CreateTicketWithZendeskMutation } from '@/features/Contact/queries';
import {
  CreateTicketWithGorgiasMutationResponse,
  CreateTicketWithGorgiasMutationVariables,
  CreateTicketWithZendeskMutationResponse,
  CreateTicketWithZendeskMutationVariables
} from '@/types/takeshape';
import { useAuthenticatedMutation } from '@/utils/takeshape';
import { useMutation } from '@apollo/client';

export type CreateTicketVariables = CreateTicketWithGorgiasMutationVariables | CreateTicketWithZendeskMutationVariables;
export type CreateTicketResponse = CreateTicketWithGorgiasMutationResponse | CreateTicketWithZendeskMutationResponse;

const CreateTicketMutation =
  contactProvider === 'zendesk' ? CreateTicketWithZendeskMutation : CreateTicketWithGorgiasMutation;

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
