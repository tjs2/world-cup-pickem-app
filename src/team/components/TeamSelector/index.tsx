import { Autocomplete, TextField, Box, Typography } from '@mui/material';
import { Team } from '../../team.model';
import Flag from '../Flag';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TeamSelectorProps {
  teams: Team[];
  onChange: (teams: Team[]) => void;
  maxSelectection?: number;
}

export function TeamSelector({
  teams,
  onChange,
  maxSelectection = 4,
}: TeamSelectorProps) {
  const { t } = useTranslation('team');
  const [selection, setSelection] = useState<Team[]>([]);

  return (
    <Autocomplete
      multiple
      value={selection}
      options={teams}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, value) => {
        event.preventDefault();
        if (value.length <= maxSelectection) {
          setSelection(value);
          onChange(value);
        }
      }}
      getOptionDisabled={(option) =>
        selection.length >= maxSelectection &&
        !selection.find((s) => s.id === option.id)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={t('selection.label')}
          placeholder={t('selection.placeholder')}
        />
      )}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          key={option.key}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Flag style={{ maxWidth: 24, maxHeight: 24 }} name={option.key} />

          <Typography variant="body2">{option.name}</Typography>
        </Box>
      )}
    />
  );
}
