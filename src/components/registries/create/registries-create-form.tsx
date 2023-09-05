'use client';

import React from 'react';
import { registriesCreateValidationSchema } from '@lib/validations.lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/forms/form';
import Button from '@components/ui/buttons/button';
import { Input } from '@components/ui/input/input';
import { LoadingIcon } from '@components/ui/icons/loading-icon';

export type RegistriesCreateFormData = z.infer<typeof registriesCreateValidationSchema>;

type RegistriesCreateFormProps = {
  onSubmit: (data: RegistriesCreateFormData) => void;
};

const RegistriesCreateForm: React.FC<RegistriesCreateFormProps> = (props) => {
  const { onSubmit } = props;

  const form = useForm<RegistriesCreateFormData>({
    // @ts-ignore
    resolver: zodResolver(registriesCreateValidationSchema),
    defaultValues: {
      content: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 flex-col">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Achievement Or Goal</FormLabel>
              <FormControl>
                <Input placeholder="Enter your goal or achievement here..." {...field} />
              </FormControl>
              <FormDescription>E.g., &apos;Complete a 30-minute workout 🏋️‍♀️&apos;</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="sm:ml-auto" type="submit">
          {form.formState.isSubmitting && <LoadingIcon className="mr-2" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RegistriesCreateForm;
