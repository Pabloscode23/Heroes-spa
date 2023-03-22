import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en PublicRoute', () => {

    test('Si no estoy autenticado debe de mostrar el children', () => {
        //usa el h1 como si fuese el children
        //se recibe que no esta loggeado
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy()

    })

    test('Si esta autenticado debe de navegar', () => {

        const contextValue = {
            logged: true,
            user: { name: 'Juan', id: '123' }
        }
        render(
            //si el initialEntries es marvel, el h1 no se ve
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={

                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Pag Marvel</h1>} />

                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pag Marvel')).toBeTruthy()

    })
})

