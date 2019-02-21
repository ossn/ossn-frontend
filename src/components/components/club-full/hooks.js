import { useState } from 'react';

export function useDerivedClubState(props) {
  const { title, ...rest } = props.club;

  return useState({ name: title, ...rest });
}
