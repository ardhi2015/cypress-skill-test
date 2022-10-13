describe('API Testing', () => {
    
    let base_url = Cypress.env('base_url')
    Cypress.config('baseUrl', `${base_url}`)
    let key = Cypress.env('api_key')

    it('Get Current Weather Data by longitud and latitude', () => {
        cy.request(`/current?lat=38&lon=78&key=${key}`).then((response) => {
            let jsonData = response.body.data[0].state_code
            cy.log(jsonData)

            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data[0]).to.have.property('state_code', '13')
            
        })
    }),

    it('Get Current Weather Data by postalcode ', () => {
        cy.request(`/current?postal_code=99501&key=${key}`).then((response) => {
            let jsonData = response.body.data[0].weather
            let myJSON = JSON.stringify(jsonData)
            cy.log(myJSON)

            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            // expect(response.body.data[0]).to.have.property('state_code', '13')
            
        })
    })


})