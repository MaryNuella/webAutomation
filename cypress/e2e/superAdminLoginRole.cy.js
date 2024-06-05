import { Login } from "../PageObjectModel/SHEloginPage"
import { metrics } from "../PageObjectModel/metrics"

///<reference types = "Cypress" />

describe('Super Admin Login Role',()=>{
   
beforeEach('',()=>{
cy.visit('/')
const ln = new Login()
ln.email()
ln.password()
ln.loginButton()
cy.wait(6000);
})

it('Visits the metrics sub-module',()=>{
   const po = new metrics()

   po.metrics()
   po.exportAs()
})



















})