import 'client-only';

import { RegisterPayload } from '@/types/auth';
import { MutationArg } from '@/types/common';
import { fetcher } from '@/utils/fetcher';
import useSWRMutation from 'swr/mutation';

function useRegister() {
    return useSWRMutation(
        '/auth/register',
        (path, { arg }: MutationArg<RegisterPayload>) =>
            fetcher({ path, method: 'POST', body: arg })
    );
}

export default useRegister;
