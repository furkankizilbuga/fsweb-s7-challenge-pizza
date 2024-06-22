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

const sizeArray = ["kucuk", "orta", "buyuk"]
  const crustArray = ["İnce", "Orta", "Kalın"]

  const crustSelect = (crust) => {
    cy.get('[data-cy="dropdown"]').select(crust)
  }

  const sizeSelect = (size) => {
    cy.get(`[data-cy="radio-${size}"]`).check()
  }

  const nameInput = (name) => {
    cy.get('[data-cy="name-input"]').clear().type(name)
  }

  const toppingsCheck = (amount) => {
    cy.get('[data-cy="checkbox-container"]')
      .find('input[type="checkbox"]')
      .each((checkbox, index) => {
        if (index < amount) {
          cy.wrap(checkbox).check()
        }
          
      })
  }



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
    sizeArray.forEach((size) => {
      sizeSelect(size)
    })
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })

  it('Button is still disabled with only crust', () => {
    crustArray.forEach((crust) => {
      crustSelect(crust)
    })
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })

  it('Button is still disabled with only toppings', () => {
    toppingsCheck(4)
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
   
  })

  it("Button still disabled with only name", () => {
    nameInput("furkan")
    cy.get('[data-cy="form-submit"]').should("be.disabled")
    cy.get('[data-cy="error-message"]').should("be.visible")
  })





  describe("Size > Küçük and all alternatives of Crust", () => {

    it("Size > Küçük and all alternatives of Crust", () => {

      sizeSelect("kucuk")
      crustArray.forEach((crust) => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")   
    })

    it("Size > Orta and all alternatives of Crust", () => {

      sizeSelect("orta")
      crustArray.forEach((crust) => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")   
      
    })

    it("Size > Büyük and all alternatives of Crust", () => {

      sizeSelect("buyuk")
      crustArray.forEach((crust) => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")   
      
    })
  })





  describe("Button disabled with only size and toppings", () => {
    it("Size > Küçük and Toppings within right amount", () => {
      sizeSelect("kucuk")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Size > Orta and Toppings within right amount", () => {
      sizeSelect("orta")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Size > Büyük and Toppings within right amount", () => {
      sizeSelect("buyuk")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })
  })






  describe("Button disabled with only crust and toppings", () => {
    it("Crust > İnce and Toppings within right amount", () => {
      crustSelect("İnce")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Crust > Orta and Toppings within right amount", () => {
      crustSelect("Orta")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })

    it("Crust > Kalın and Toppings within right amount", () => {
      crustSelect("Kalın")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })
  })





  describe("Button disabled with only Size and Name", () => {

    it("Size > Küçük and Name Valid", () => {
      sizeSelect("kucuk")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Orta and Name Valid", () => {
      sizeSelect("orta")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Size > Büyük and Name Valid", () => {
      sizeSelect("buyuk")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })


  })





  describe("Button disabled with only Crust and Name", () => {

    it("Crust > İnce and Name Valid", () => {
      crustSelect("İnce")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Crust > Orta and Name Valid", () => {
      crustSelect("Orta")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

    it("Crust > Kalın and Name Valid", () => {
      crustSelect("Kalın")
      nameInput("furkan")
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })

  })





  describe("Button disabled with only Toppings and Name", () => {

    it("Toppings within right amount and Name Valid", () => {
      nameInput("furkan")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")
    })
    
  })





  describe("Button disabled with Size, Name and Crust", () => {

    it("Size > Küçük, Name Valid, and all alternatives of Crust", () => {
      crustArray.forEach(crust => {
        crustSelect(crust)
        sizeSelect("kucuk")
        nameInput("furkan")
        cy.get('[data-cy="form-submit"]').should("be.disabled")
        cy.get('[data-cy="error-message"]').should("be.visible")
      })
    })

    it("Size > Orta, Name Valid, and all alternatives of Crust", () => {
      crustArray.forEach(crust => {
        crustSelect(crust)
        sizeSelect("orta")
        nameInput("furkan")
        cy.get('[data-cy="form-submit"]').should("be.disabled")
        cy.get('[data-cy="error-message"]').should("be.visible")
      })
    })

    it("Size > Büyük, Name Valid, and all alternatives of Crust", () => {
      crustArray.forEach(crust => {
        crustSelect(crust)
        sizeSelect("buyuk")
        nameInput("furkan")
        cy.get('[data-cy="form-submit"]').should("be.disabled")
        cy.get('[data-cy="error-message"]').should("be.visible")
      })
    })
  })






  describe("Button disabled with Toppings, Name and Crust", () => {

    it("Toppings right amount, Name Valid, and all alternatives of Crust", () => {

      crustArray.forEach(crust => {
        crustSelect(crust)
        toppingsCheck(4)
        nameInput("furkan")
        cy.get('[data-cy="form-submit"]').should("be.disabled")
        cy.get('[data-cy="error-message"]').should("be.visible")
      })

    })




  describe("Button disabled with Toppings, Size and Crust", () => {

    it("Toppings right amount, Size, and all alternatives of Crust", () => {

      toppingsCheck(4)
      sizeSelect("kucuk")
      crustArray.forEach(crust => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      toppingsCheck(4)
      sizeSelect("orta")
      crustArray.forEach(crust => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

      toppingsCheck(4)
      sizeSelect("buyuk")
      crustArray.forEach(crust => {
        crustSelect(crust)
      })
      cy.get('[data-cy="form-submit"]').should("be.disabled")
      cy.get('[data-cy="error-message"]').should("be.visible")

    })
  })






  describe("Button disabled with Toppings, Size and Name", () => {

    it("Toppings right amount, Size, and name", () => {

      sizeArray.forEach(size => {
        sizeSelect(size)
        nameInput("furkan")
        toppingsCheck(4)
        cy.get('[data-cy="form-submit"]').should("be.disabled")
        cy.get('[data-cy="error-message"]').should("be.visible")

      })

    })

  })






  describe("All Valid Button Enabled", () => {

    it("All Valid", () => {

      sizeSelect("kucuk")
      crustSelect("Orta")
      nameInput("furkan")
      toppingsCheck(4)
      cy.get('[data-cy="form-submit"]').should("not.be.disabled")
      cy.get('[data-cy="form-submit"]').click()
      cy.url().should("contain", "/success")
    })

    })
    
})
})