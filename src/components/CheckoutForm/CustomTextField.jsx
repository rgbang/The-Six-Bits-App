import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

export const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue=""

        render={({ field }) => (
          <TextField
            {...field}            
            label={label}
            fullWidth
            required={required}
            error={isError}
          />
          )}
      />
    </Grid>
  );
};
