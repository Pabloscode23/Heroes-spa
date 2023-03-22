import { types } from "../../../src/auth/types/types"


describe('Pruebas en Types', () => {

    test('Debe regresar los types', () => {

        const correctTypes = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        };
        expect(types).toEqual(correctTypes);
    });
});



