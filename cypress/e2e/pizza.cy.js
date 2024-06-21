describe('page successfully opens', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
})

describe('Home Page Tests', () => {
  it('Button leads to order form', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="home-button"]').click()
    cy.url().should("contain", "/order")
  })
})




describe('Order Page Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="home-button"]').click()
    cy.url().should("contain", "/order")
  })

  it('Button is disabled on default', () => {
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })

  it('Button is still disabled with only size', () => {
    cy.get('[data-cy="radio-kucuk"]').check()
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")

    cy.get('[data-cy="radio-orta"]').check()
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")

    cy.get('[data-cy="radio-buyuk"]').check()
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })

  it('Button is still disabled with only crust', () => {
    cy.get('[data-cy="dropdown"]').select("İnce")
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")

    cy.get('[data-cy="dropdown"]').select("Orta")
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")

    cy.get('[data-cy="dropdown"]').select("Kalın")
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })

  it('Button is still disabled with only toppings', () => {
    cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
   
  })

  it("Button still disabled with only name", () => {
    cy.get('[data-cy="name-input"]').type("furkan")
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })





  describe("Size > Küçük and all alternatives of Crust", () => {

    it("Size > Küçük and all alternatives of Crust", () => {

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
      
    })

    it("Size > Orta and all alternatives of Crust", () => {

      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
      
    })

    it("Size > Büyük and all alternatives of Crust", () => {

      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
      
    })



  
  })





  describe("Button disabled with only size and toppings", () => {
    it("Size > Küçük and Toppings within right amount", () => {
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Size > Orta and Toppings within right amount", () => {
      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Size > Büyük and Toppings within right amount", () => {
      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })
  })






  describe("Button disabled with only crust and toppings", () => {
    it("Crust > İnce and Toppings within right amount", () => {
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Crust > Orta and Toppings within right amount", () => {
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Crust > Kalın and Toppings within right amount", () => {
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })
  })





  describe("Button disabled with only Size and Name", () => {

    it("Size > Küçük and Name Valid", () => {
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Orta and Name Valid", () => {
      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Büyük and Name Valid", () => {
      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })


  })





  describe("Button disabled with only Crust and Name", () => {

    it("Crust > İnce and Name Valid", () => {
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Crust > Orta and Name Valid", () => {
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Crust > Kalın and Name Valid", () => {
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

  })





  describe("Button disabled with only Toppings and Name", () => {

    it("Toppings within right amount and Name Valid", () => {
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })





  describe("Button disabled with Size, Name and Crust", () => {

    it("Size > Küçük, Name Valid, and all alternatives of Crust", () => {
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Orta, Name Valid, and all alternatives of Crust", () => {
      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-orta"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Büyük, Name Valid, and all alternatives of Crust", () => {
      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

      cy.get('[data-cy="radio-buyuk"]').check()
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })






  describe("Button disabled with Toppings, Name and Crust", () => {

    it("Toppings right amount, Name Valid, and all alternatives of Crust", () => {

      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Name Valid, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Name Valid, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })






  describe("Button disabled with Toppings, Size and Crust", () => {

    it("Toppings right amount, Size, and all alternatives of Crust", () => {

      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Size, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Size, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Orta")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="dropdown"]').select("Kalın")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })






  describe("Button disabled with Toppings, Size and Name", () => {

    it("Toppings right amount, Size, and all alternatives of Crust", () => {

      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Size, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Toppings right amount, Size, and all alternatives of Crust", () => {
      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      
      cy.get('[data-cy="name-input"]').clear()
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })






  describe("All Valid Button Enabled", () => {

    it.only("All Valid", () => {

      cy.get('[data-cy="radio-kucuk"]').check()
      cy.get('[data-cy="dropdown"]').select("İnce")
      cy.get('[data-cy="name-input"]').type("furkan")
      cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < 4) {
          cy.wrap(checkbox).check()
        }
          
      })
      cy.get('[data-cy="form-submit"]').should("not.be.disabled")
      cy.get('[data-cy="form-submit"]').click()
      cy.url().should("contain", "/success")
    })

    })
    
})