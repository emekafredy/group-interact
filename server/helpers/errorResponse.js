import _ from 'lodash';

export const formatErrors = (e) => e.errors.map(x => _.pick(x, ['path', 'message']));
