
export const createNotenicStoreName = 'notenic';

export interface INotenicState {
  user: any;
  token: {
    token: string,
    expire: number,
  };
}
