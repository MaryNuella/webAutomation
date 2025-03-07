import { Login } from "../PageObjectModel/loginPage"
import { metrics } from "../PageObjectModel/metrics"

///<reference types = "Cypress" />

describe('Admin Login Role',()=>{

    const ln = new Login()
   const po = new metrics()
   const ro = new Analysis()
   const uo = new panalysis()
   const oo = new transactions()
   const lo = new Report()
   const yo = new updateBulkTransactions()
   const qq = new eReport()
   const ko = new client()
   
beforeEach('properly load data',function() {

   cy.fixture('data').as('data')
   
})

it('Logs in unsuccessfully due to invalid credentials',function () {
ln.visit()
ln.fillEmail(this.data.invalidUser.email)
ln.fillPassword(this.data.invalidUser.password)
ln.loginButton()
vm.validateLoginFailure()
})

it('Logs in unsuccessfully due to blank credentials',function () {
   ln.visit()
   ln.fillEmail(this.data.blankUser.email)
   ln.fillPassword(this.data.blankUser.password) //replace with blank
   vm.validateBlankEmail()
   vm.validateBlankPassword()
   
   
   })

it('Logs in successfully',function () {
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
})


it('Visits the metrics sub-module', function () {
  
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
   cy.wait(2000)
   po.metrics()
   po.exportAs() 

   po.timeframeField() 
  

   po.timeframeField()
   po.dateFrom() 
   po.sort()  
})

it('Visits analysis', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
   ro.analysis()
   ro.country()
   ro.searchBtn()
   ro.exportAsPDF()
   ro.exportAsCSV()
   ro.visibilityIcon()
   ro.cancelIcon()

})

it.skip('Visits panalysis', function (){
   
   
   uo.panalysis()
   uo.from()
   uo.status()
   uo.country()
   uo.searchBtn()
   uo.visibilityIcon()
   uo.exportAsCSV()
   uo.exportAsPDF()
   
   
   })


it('Visits transactions, invalid data passed in all input fields', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      oo.transactions()
      oo.currency()
      oo.transactionID(this.data.invalidTransactionID.transactionID)
      oo.messageCode(this.data.invalidEveryOtherInputField.everyOtherInputField)
      oo.messageNote(this.data.invalidEveryOtherInputField.everyOtherInputField)
      vm.validateInvalidTransactionId()
      vm.validateInvalidMessageCode()
      vm.validateInvalidMessageNote()
      oo.searchBtn()

      oo.exportAsCSV()
      oo.exportAsPDF()

   })

it('Visits transactions, upper boundary data passed in all input fields', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      oo.transactions()
      oo.today()
      oo.currency()
      oo.transactionID(this.data.blankTransactionID.transactionID)
      oo.messageCode(this.data.upperBoundaryEveryOtherInputField.everyOtherInputField)
      oo.messageNote(this.data.upperBoundaryEveryOtherInputField.everyOtherInputField)
      vm.validateBlankTransactionId()
      vm.validateMessageNoteUpperBoundary()
      vm.validateMessageCodeUpperBoundary()
      oo.searchBtn()

      oo.exportAsCSV()
      oo.exportAsPDF()

   })

it('Visits transactions, lower boundary data passed in all input fields', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      oo.transactions()
      oo.today()
      oo.currency()
      oo.transactionID(this.data.blankTransactionID.transactionID)
      oo.messageCode(this.data.lowerBoundaryEveryOtherInputField.everyOtherInputField)
      oo.messageNote(this.data.lowerBoundaryEveryOtherInputField.everyOtherInputField)
      vm.validateBlankTransactionId()
      vm.validateMessageNoteLowerBoundary()
      vm.validateMessageCodeLowerBoundary()
      oo.searchBtn()

      oo.exportAsCSV()
      oo.exportAsPDF()

   })


it('Visits transactions, blank data passed in all input fields', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      oo.transactions()
      oo.today()
      oo.currency()
      oo.transactionID(this.data.blankTransactionID.transactionID) 
      oo.messageCode(this.data.blankTransactionIDEveryOtherInputField.everyOtherInputField) 
      oo.messageNote(this.data.blankEveryOtherInputField.everyOtherInputField) 
      vm.validateBlankTransactionId()
      vm.validateBlankMessageNote()
      vm.validateBlankMessageCode()
      oo.searchBtn()

      oo.exportAsCSV()
      oo.exportAsPDF()

   })

it('Visits transactions, valid data passed in all input fields', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      oo.transactions()
      oo.today()
      oo.currency()
      oo.transactionID(this.data.validTransactionID.transactionID)
      oo.messageCode(this.data.validEveryOtherInputField.everyOtherInputField)
      oo.messageNote(this.data.validEveryOtherInputField.everyOtherInputField)
      oo.searchBtn()
      oo.exportAsCSV()
      oo.exportAsPDF()

   })

it('Visits report', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
         
         lo.Report()
         lo.dateFrom()
         lo.status()
         lo.clients()
         lo.searchBtn()
         lo.viewAMoreDetailedReport()
         lo.cancelIcon()
         lo.exportAsPDF()
         lo.exportAsCSV()
         
         })

it('Visits update bulk', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()
      
      yo.updateBulk()
      yo.uploadFile()
      yo.status()
      yo.enterFailCode()
      yo.note()
      yo.updateTransactionBTN()
      yo.confirm()
      yo.exportAsPDF()
      yo.exportAsCSV()
      
      
      })


it('automates the report sub module[invalid inputs]', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()

         qq.Report()
         qq.from(this.data.validFromDate.input)
         qq.status()
         qq.transactionId(this.data.invalidTransactionID.transactionID)
         vm.validateInvalidTransactionId()
         //qq.searchBTN()
     
     
     
           })


it('automates the eReport sub module [blank inputs]', function (){
   ln.visit()
   ln.fillEmail(this.data.validUser.email)
   ln.fillPassword(this.data.validUser.password)
   ln.loginButton()
   vm.validateLoginSuccess()

            qq.eReport()
            qq.from(this.data.validFromDate.input)
            qq.status()
            qq.transactionId(this.data.blankTransactionID.transactionID)
            vm.validateBlankTransactionId()
          //  qq.searchBTN()
        
        
        
              })

})
