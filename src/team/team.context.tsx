import { createContext } from 'react';
import type { TeamContextType } from './team.types';

export const TeamContext = createContext<TeamContextType | null>(null);
