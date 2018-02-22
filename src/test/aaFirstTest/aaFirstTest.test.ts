// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { activated } from '../../client/extension';
import { initialize } from '../initialize';

// NOTE:
// We need this to be run first, as this ensures the extension activates.
// Sometimes it can take more than 25 seconds to complete (as the extension looks for interpeters, and the like).
// So lets wait for a max of 1 minute for the extension to activate (note, subsequent load times are faster).

suite('Autocomplete', () => {
    suiteSetup(async function () {
        // tslint:disable-next-line:no-invalid-this
        this.timeout(60000);
        await initialize();
    });
    test('Python extension has activated', async () => {
        await activated;
    });
});
