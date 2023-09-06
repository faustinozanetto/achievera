'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@components/ui/accordion/accordion';
import axios from 'axios';
import { useToast } from '@hooks/toasts/use-toast';
import { CreateRegistryApiResponse } from '@typedefs/api.types';
import RegistriesCreateForm, { RegistriesCreateFormData } from './registries-create-form';

const RegistriesCreate: React.FC = () => {
  const toast = useToast();

  const handleRegistrySubmit = async (data: RegistriesCreateFormData) => {
    try {
      const response = await axios.post<CreateRegistryApiResponse>('/api/registries', {
        ...data,
      });

      if (response.data.error) {
        return toast({ variant: 'danger', content: response.data.error });
      }

      return toast({ variant: 'success', content: 'Creation successful!' });
    } catch (err) {
      return toast({ variant: 'danger', content: 'An error occurred!' });
    }
  };

  return (
    <Accordion className="bg-background-alternate shadow-lg px-4 rounded-lg border" type="single" collapsible>
      <AccordionItem className="border-b-0" value="item-1">
        <AccordionTrigger className="font-semibold text-lg">Set Your Goal or Achievement</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            <span className="font-bold text-primary">Tip:</span> You can use emojis to add a fun touch to your goal or
            achievement!
          </p>
          <RegistriesCreateForm onSubmit={handleRegistrySubmit} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RegistriesCreate;
