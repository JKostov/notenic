import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createNotenicStoreName, INotenicState } from '@notenic/store/notenic.state';

const getNotenicFeature = createFeatureSelector<INotenicState>(createNotenicStoreName);

export const getUser = createSelector(getNotenicFeature, state => state.user);
