import { atom } from 'recoil';
import { Quote } from '../types/quote';

const quoteHistoryAtom = atom<Quote[]>({
  key: 'quoteHistoryAtom',
  default: [],
});

export default quoteHistoryAtom;