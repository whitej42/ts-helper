import ap   from '../data/ap.json';
import dtg  from '../data/dtg.json';
import jt   from '../data/jt.json';
import misc from '../data/misc.json';

const locos = [
    ...ap.dlcPacks,
    ...dtg.dlcPacks,
    ...jt.dlcPacks,
    ...misc.dlcPacks,
];

export function useLocos() {
    return { locos, loading: false, error: null };
}
