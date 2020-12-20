import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { TextField } from '@material-ui/core';

type CommonProps = {
    input: WrappedFieldInputProps
    type: string
    placeholder: string
    meta: WrappedFieldMetaProps,
    name: string
}

export const ValidatorInput = ({input, type, placeholder, meta, name}:CommonProps) => {
    return <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={placeholder}
                label={placeholder}
                autoFocus
                type={type}
                {...input}
            />
}
