
import Navbar from './Component/Navigate';
import Navigate from './Component/Navigate';
import Navigationbar from './Component/Navigate';
import logo from './logo.svg';
import './App.css';
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import SampleHome from './Component/SampleHome';
import ResponsiveNavbar from './Component/ResponsiveNavbar';
import Slide from './Component/Slide';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import PythonHome from './Component/PythonHome';
import PythonSidebar from './Component/PythonSidebar';


import PythonHomePage from './Component/PythonBasic/PythonHomePage';
import PythonIntroPage from './Component/PythonBasic/PythonIntroPage';
import { useEffect, useState } from 'react';
import AddBlock from './Component/AddBlock';
import { Modal, Button } from "react-bootstrap";
import AdBlocker from './Component/AdBlocker';
import AdBlockProvider from "./Component/AdBlockContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PythonInstallationPage from './Component/PythonBasic/PythonInstallationPage';
import HelloDLKPage from './Component/PythonBasic/HelloDLKPage';
import PythonCommentsPage from './Component/PythonBasic/PythonCommentsPage';
import PythonVariablePage from './Component/PythonBasic/PythonVariablePage';
import PythonObjectIdentityPage from './Component/PythonBasic/PythonObjectIdentityPage';
import PythonDatatypesPage from './Component/PythonBasic/PythonDatatypesPage';
import PageWrapper from './Component/Pagewrapper';
import PythonArithmeticOperatorPage from './Component/PythonBasic/PythonArithmeticOperatorPage';
import PythonCompilerPage from './Component/Compiler/PythonCompilerPage';
import PythonUserInputPage from './Component/PythonBasic/PythonUserInputPage';
import PythonNumbersPage from './Component/PythonBasic/PythonNumbersPage';
import PythonBooleanPage from './Component/PythonBasic/PythonBooleanPage';
import PythonLiteralsPage from './Component/PythonBasic/PythonLiteralsPage';
import PythonLogicalOperatorPage from './Component/PythonBasic/PythonLogicalOperatorPage';
import PythonBitwiseOperatorPage from './Component/PythonOOPS/PythonBitwiseOperatorPage';
import PythonAssignmentoperatorpage from './Component/PythonBasic/PythonAssignmentoperatorpage';
import PythonControlFlowPage from './Component/PythonControlStatement/PythonControlFlowPage';
import PythonComparisonOperatorsPage from './Component/PythonBasic/PythonComparisonOperatorsPage';
import PythonMembershipOperatorsPage from './Component/PythonBasic/PythonMembershipOperatorsPage';
import PythonIdentityOperatorsPage from './Component/PythonBasic/PythonIdentityOperatorsPage';
import PythonOperatorPrecedencePage from './Component/PythonOOPS/PythonOperatorPrecedence';
import TimerModel from './Component/TimerModel';
import SignUpPage from './Component/SignupPage/SignUpPagefirst';
import TimerGuard from './Component/TimerGuard';
import Timermodal from './Component/Timermodal';
import { AuthProvider } from './Component/AuthContext';


import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import SignUpPop from './Component/SignUpPop';
import GoogleSignUpPop from './Component/GoogleSignUpPop';
import PythonIfPage from './Component/PythonControlStatement/PythonIfPage';
import PythonIfElsePage from './Component/PythonControlStatement/PythonIfElsePage';
import PythonNestedIfPage from './Component/PythonControlStatement/PythonNestedIfPage';
import PythonMatchCasePage from './Component/PythonControlStatement/PythonMatchCasePage';
import PythonElifPage from './Component/PythonControlStatement/PythonElifPage';
import PythonForLoopPage from './Component/PythonControlStatement/PythonForLoopPage';
import PythonForElsePage from './Component/PythonControlStatement/PythonForElsePage';
import PythonWhileLoop from './Component/PythonControlStatement/PythonWhileLoop';
import PythonBreak from './Component/PythonControlStatement/PythonBreak';
import PythonContinue from './Component/PythonControlStatement/Pythoncontinue';
import PythonPass from './Component/PythonPass';
import GooglePop from './Component/GooglePop';
import Cookies from './Component/Cookies';
import PythonModules from './Component/PythonFunctionModules/PythonModules';
import PythonStringConcatenation from './Component/PythonString/PythonStringConcatenation';
import PythonStringFormatting from './Component/PythonString/PythonStringFormatting';
import PythonTuple from './Component/PythonTuples/PythonTuple';
import ReactSidebar from './Component/Reactjs/ReactSidebar';
import ReactHome from './Component/Reactjs/ReactHome';
import ReactHomePage from './Component/Reactjs/ReactHomePage';
import ReactUsecontextpage from './Component/Reactjs/ReactUsecontextpage';
import ReactIntropage from './Component/Reactjs/ReactIntropage';
import ReactInstallationPage from './Component/Reactjs/ReactInstallationPage';
import ReactRenderHtmlPage from './Component/Reactjs/ReactRenderHtmlPage';
import ReactUpgradepage from './Component/Reactjs/ReactUpgradepage';
import PythonFunctions from './Component/PythonFunctionModules/PythonFunctions';
import PythonDefaultArguments from './Component/PythonFunctionModules/PythonDefaultArguments';
import PythonKeywordArguments from './Component/PythonFunctionModules/PythonKeywordArguments';
import PythonKeywordOnlyArguments from './Component/PythonFunctionModules/PythonKeywordOnlyArguments';
import PythonPositionalOnlyArguments from './Component/PythonFunctionModules/PythonPositionalOnlyArguments';
import PythonPositionalArgument from './Component/PythonFunctionModules/PythonpositionalKeyword';
import PythonScope from './Component/PythonFunctionModules/PythonScope';
import PythonFunctionAnnotations from './Component/PythonFunctionModules/PythonFunctionAnnotations';
import PythonBuiltInFunctions from './Component/PythonFunctionModules/PythonBuiltInFunctions';
import PythonStrings from './Component/PythonString/PythonStrings';
import PythonSlicingStrings from './Component/PythonString/PythonSlicingStrings';
import PythonModifyStrings from './Component/PythonString/PythonModifyStrings';
import PythonStringMethods from './Component/PythonString/PythonStringMethods';
import PythonList from './Component/PythonList/PythonList';
import PythonAccessListItems from './Component/PythonList/PythonAccessListItems';
import PythonChangeListItems from './Component/PythonList/PythonChangeListItems';
import PythonAddListItems from './Component/PythonList/PythonAddListItems';
import PythonRemoveListItems from './Component/PythonList/PythonRemoveListItems';
import PythonLoopList from './Component/PythonList/PythonLoopList';
import PythonListComprehensions from './Component/PythonList/PythonListComprehensions';
import ReactPropsPage from './Component/Reactjs/ReactPropsPage';
import ReactStatePage from './Component/Reactjs/ReactStatePage';
import ReactEventPage from './Component/Reactjs/ReactEventPage';
import ReactJsxPage from './Component/Reactjs/ReactJsxPage';
import ReactReduxPage from './Component/Reactjs/ReactReduxPage';
import ReactListPage from './Component/Reactjs/ReactListPage';
import ReactUseStatePage from './Component/Reactjs/ReactUseStatePage';
import PythonSetPage from './Component/PythonSets/PythonSetPage';
import PythonAccessSetpage from './Component/PythonSets/PythonAccessSetpage';
import PythonAddSetItemsPage from './Component/PythonSets/PythonAddSetItemsPage';
import PythonRemoveSetitemPage from './Component/PythonSets/PythonRemoveSetitemPage';
import PythonLoopListPage from './Component/PythonSets/PythonLoopsetPage';
import PythonLoopsetPage from './Component/PythonSets/PythonLoopsetPage';
import PythonJoinSetPage from './Component/PythonSets/PythonJoinSetPage';
import PythonCopySetPage from './Component/PythonSets/PythonCopySetPage';
import PythonSetOperators from './Component/PythonSets/PythonSetOperators';
import PythonSetmethodPage from './Component/PythonSets/PythonSetmethodPage';
import ReactComponentPage from './Component/Reactjs/ReactComponentPage';
import ReactClassComponentPage from './Component/Reactjs/ReactClassComponentPage';
import ReactConditionalRenderPage from './Component/Reactjs/ReactConditionalRenderPage';
import ReactFormPage from './Component/Reactjs/ReactFormPage';
import ReactEs6Page from './Component/Reactjs/ReactEs6Page';
import SignUpPage2 from './Component/SignupPage/SignUpPage2';
import PythonOopsPage from './Component/PythonOOPS/PythonOopsPage';
import PythonClassObjectPage from './Component/PythonOOPS/PythonClassObjectPage';
import PythonClassAttributePage from './Component/PythonOOPS/PythonClassAttributePage';
import PythonClassMethodPage from './Component/PythonOOPS/PythonClassMethodPage';
import PythonstaticMethodPage from './Component/PythonOOPS/PythonstaticMethodPage';
import PythonConstructorspage from './Component/PythonOOPS/PythonConstructorspage';
import PythonAccessModifierPage from './Component/PythonOOPS/PythonAccessModifierPage';
import PythonInheritancepage from './Component/PythonOOPS/PythonInheritancepage';
import PythonPolymorphism from './Component/PythonOOPS/PythonPolymorphismPage';
import PythonPolymorphismPage from './Component/PythonOOPS/PythonPolymorphismPage';
import PythonmethodoverridingPage from './Component/PythonOOPS/PythonmethodoverridingPage';
import PythonMethodOverloadingPage from './Component/PythonOOPS/PythonMethodOverloadingPage';
import PythonDynamicBindingPage from './Component/PythonOOPS/PythonDynamicBindingPage';
import PythonAbstractionPage from './Component/PythonOOPS/PythonAbstractionPage';
import PythonSyntaxErrorpage from './Component/PythonErrors/PythonSyntaxErrorpage';
import PythonExceptionpage from './Component/PythonErrors/PythonExceptionpage';
import PythontryexceptBlockPage from './Component/PythonErrors/PythontryexceptBlockPage';
import PythonFilemethodPage from './Component/PythonFileHandling/PythonFilemethodPage';
import PythonOsFileDirectoryPage from './Component/PythonFileHandling/PythonOsFileDirectoryPage';
import PythonEncapsulationPage from './Component/PythonOOPS/PythonEncapsulationPage';
import PythonInterfacesPage from './Component/PythonOOPS/PythonInterfacesPage';
import Error404Page from './Component/ErrorPage/Error404Page';
import { RatingProvider } from './Component/StarRating/RatingContext';
import SignupPage1 from './Component/SignupPage/SignupPage';
import SplashScreen from './Component/SplashScreen/SplashScreen';
import AOS from "aos";
import "aos/dist/aos.css";
import PythonHome2 from './Component/PythonHome2';
import ReactHomeBack from './Component/Reactjs/ReactHomeBack';
import SignUpPagePrivateRoute from './Component/PrivateRoute/SignUpPagePrivateRoute';





function App() {
 
//for prevent inspect
 /* useEffect(() => {
    const preventCopy = (e) => e.preventDefault();

    document.addEventListener("copy", preventCopy);
    document.addEventListener("contextmenu", preventCopy);
    const BlockDevTool = (event) =>{
 
    if (event.keyCode === 123) {
      event.preventDefault();
     }
      


  // Block right-click (button 2 is right-click)
  if (event.button === 2) {
    event.preventDefault();
    alert("Right-click is disabled.");
  }
}

document.addEventListener('keydown', BlockDevTool);


    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("contextmenu", preventCopy);
      document.removeEventListener('keydown', BlockDevTool);
    };
  }, []);
  */




  //ad block


  //SplashScreen
 

  const [showSplash, setShowSplash] = useState(true);

  // Simulate loading time (e.g., API or assets loading)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // Show splash screen for 3 seconds
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false,    // Allow animation to run multiple times (not just once)
        disable: false, // Ensure animations are enabled for all devices
        offset: 100, // Trigger animation slightly before the element is in view
        disable: 'phone', // Use this to explicitly enable or disable
        disable: false, // Force AOS on all devices
        delay: 0, // Delay before animation starts
       
        easing: 'ease', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
      });
  
      console.log('AOS initialized');
  
    }, []);
  



    


  
  return (


   
    <AdBlockProvider>
       
    <div className='Apptheme times-roman-text'>

    
{
  /*
    <SplashScreen/>
  */

}
    
    
    <AdBlocker/>
   
     <BrowserRouter>
     {

   <Timermodal/>
}

     
    
  
     <GoogleSignUpPop/>


   
     
     
      <Routes>
       
       <Route path='/sign' element={<SignUpPage2/>}></Route>
     
       <Route path='/cookies' element = {<Cookies/>}></Route>
       <Route path='/errorpage' element ={<Error404Page/>}></Route>
      {/* <Route path='/sign2' element={<SignUpPage/>}></Route> */}
    
   
      <Route path='/' element = {showSplash ? <SplashScreen/>:
        
            <SampleHome/>
       
        }/>
      {/**Python */}


     
      <Route path='/react/python' element = {<PythonHome2 />} ></Route>
      <Route path='/python' element = {<PythonHome />} >

      {/* Python Basic*/}

      <Route path='' element = {<PythonHomePage />} /> 
      <Route path='/python/intro' element = {<PageWrapper><PythonIntroPage/></PageWrapper>}/> 
      <Route path='/python/installation' element = {<PythonInstallationPage/>}/>
      <Route path='/python/hello' element = {<HelloDLKPage/>}/>
      <Route path='/python/comments' element = {<PythonCommentsPage/>}/>
      <Route path='/python/variable' element = {<PythonVariablePage/>}/>
      <Route path="/python/objectidentity" element = {<PythonObjectIdentityPage/>} />
      <Route path="/python/datatypes" element = {<PythonDatatypesPage/>} />
      <Route path="/python/userinput" element = {<PythonUserInputPage/>} />
      <Route path="/python/numberspage" element = {<PythonNumbersPage/>} />
      <Route path="/python/boolean" element = {<PythonBooleanPage/>} />
      <Route path="/python/literal" element = {<PythonLiteralsPage/>} />
      <Route path="/python/PythonComparison" element = {<PythonComparisonOperatorsPage/>} />
      <Route path="/python/membership" element = {<PythonMembershipOperatorsPage/>} />
      <Route path="/python/identity" element = {<PythonIdentityOperatorsPage/>} />
      <Route path="/python/precedence" element = {<PythonOperatorPrecedencePage/>} />

      
      {/* me  */}
      <Route path="/python/pythonArithmetic" element = {<PythonArithmeticOperatorPage/>} />
      <Route path="/python/logical" element = {<PythonLogicalOperatorPage/>} />
      <Route path="/python/Bitwise" element = {<PythonBitwiseOperatorPage/>} />
      <Route path ="/python/Assignment" element = {<PythonAssignmentoperatorpage/>}/>


  {/** Python control flow */}
      <Route path="/python/controlflow" element = {<PythonControlFlowPage/>} />
      <Route path="/python/if" element = {<PythonIfPage/>} />
      <Route path='/python/ifelse' element ={<PythonIfElsePage/>}/>
      <Route path='/python/nestedif' element ={<PythonNestedIfPage/>}/>
      <Route path='/python/matchcase' element ={<PythonMatchCasePage/>}/>
      <Route path='/python/elif' element ={<PythonElifPage/>}/>
      <Route path='/python/forloop' element = {<PythonForLoopPage/>}/>
      <Route path='/python/forelseloop' element = {<PythonForElsePage/>}/>
      <Route path='/python/whileloop' element = {<PythonWhileLoop/>}/>
      <Route path='/python/break' element = {<PythonBreak/>}/>
      <Route path='/python/continue' element = {<PythonContinue/>}/>
      <Route path='/python/pass' element = {<PythonPass/>}/>



      {/** python function */}
      <Route path='/python/function' element = {<PythonFunctions/>} />
      <Route path='/python/defaultarguments' element = {<PythonDefaultArguments/>} />
      <Route path='/python/keywordarguments' element = {<PythonKeywordArguments/>}/>
      <Route path='/python/keywordonly' element ={<PythonKeywordOnlyArguments/>} />
      <Route path='/python/positionalkeyword' element ={<PythonPositionalArgument/>}/>
      <Route path= '/python/positiononly' element = {<PythonPositionalOnlyArguments/>}/>
      <Route path='/python/scope' element = {<PythonScope/>}/>
      <Route path='/python/functionanno'element ={<PythonFunctionAnnotations/>}/>
      <Route path='/python/buildinfunction' element={<PythonBuiltInFunctions/>}/>
      {/**me */}

      <Route path='/python/modules' element = {<PythonModules/>}/>


      {/* python string */}
      
      <Route path='/python/string' element ={<PythonStrings/>}/>
      <Route path='/python/slicing' element ={<PythonSlicingStrings/>}/>
      <Route path='/python/modify' element = {<PythonModifyStrings/>}/>
      <Route path='/python/stringmethod' element= {<PythonStringMethods/>}/>

     {/**me */}
      <Route path='/python/stringconcatenation' element = {<PythonStringConcatenation/>}/>
      <Route path='/python/stringformatting' element = {<PythonStringFormatting/>} />
      


     {/**List */}
     <Route path='/python/list' element ={<PythonList/>}/>
     <Route path='/python/listaccess' element ={<PythonAccessListItems/>}/>
     <Route path='/python/listchange' element ={<PythonChangeListItems/>}/>
     <Route path='/python/addlist' element ={<PythonAddListItems/>}/>
     <Route path= '/python/removelist' element ={<PythonRemoveListItems/>}/>
     <Route path='/python/LoopLists' element ={<PythonLoopList/>}/>
     <Route path='/python/ListComprehension' element ={<PythonListComprehensions/>}/>



      {/**python Tuples */}
      {/**me */}
      <Route path = '/python/tuple' element = {<PythonIntroPage/>}/>



      {/**Pythonset */}
            {/**me */}
      <Route path='/python/set' element ={<PythonSetPage/>}/>
      <Route path='/python/accessset'element ={<PythonAccessSetpage/>}/>
      <Route path = '/python/addsetitem' element= {<PythonAddSetItemsPage/>}/>
      <Route path = '/python/removesetitem' element ={<PythonRemoveSetitemPage/>}/>
      <Route path='/python/loopset' element ={<PythonLoopsetPage/>}/>
      <Route path='/python/joinset' element ={<PythonJoinSetPage/>}/>
      <Route path='/python/copyset' element = {<PythonCopySetPage/>}/>
      <Route path='/python/setoperator' element = {<PythonSetOperators/>}/>
      <Route path='/python/setmethod' element ={<PythonSetmethodPage/>}/>



       {/**python Oops */}
      {/**me */}
      <Route path='/python/oops' element = {<PythonOopsPage/>}/>
      <Route path='/python/classobject' element ={<PythonClassObjectPage/>}/>
      <Route path='/python/classattribute' element ={<PythonClassAttributePage/>}/>
      <Route path='/python/classmethod' element = {<PythonClassMethodPage/>}/>
      <Route path= '/python/staticmethod' element = {<PythonstaticMethodPage/>}/>  
      <Route path= '/python/construstor' element = {<PythonConstructorspage/>}/>   
      <Route path= '/python/accessmodifier'element = {<PythonAccessModifierPage/>}/> 
      <Route path='/python/inheritance' element = {<PythonInheritancepage/>}/>
      <Route path='/python/polymorphism' element ={<PythonPolymorphismPage/>}/>
      <Route path='/python/overriding' element = {<PythonmethodoverridingPage/>}/>
      <Route path= '/python/overloading' element = {<PythonMethodOverloadingPage/>}/>
      <Route path='/python/dynamicbinding' element ={<PythonDynamicBindingPage/>}/>
      <Route path='/python/abstract' element ={<PythonAbstractionPage/>}/>
      <Route path= '/python/encapsulation' element = {<PythonEncapsulationPage/>}/>
      <Route path='/python/interface' element = {<PythonInterfacesPage/>}/>


        {/**python Files */}
        <Route path= '/python/filemethod'element ={<PythonFilemethodPage/>}/>
        <Route path='/python/osfiledirectory' element = {<PythonOsFileDirectoryPage/>}/>
 
      
       {/**python Errors */}
       <Route path='/python/syntaxerror' element ={<PythonSyntaxErrorpage/>}/>
       <Route path='/python/exceptions' element = {<PythonExceptionpage/>}/>
       <Route path='/python/tryexcept' element ={<PythontryexceptBlockPage/>}/>

      </Route>

      
      

       {/** React */}
       <Route path='/python/react' element = {<ReactHomeBack/>}></Route>
      
      <Route path='react' element = {<ReactHome/>}>
      <Route path='' element = {<ReactHomePage/>} />
      <Route path='/react/intro' element = {<ReactIntropage/>}/>
      <Route path='/react/installation' element = {<ReactInstallationPage/>}/>
      <Route path='/react/renderhtml' element = {<ReactRenderHtmlPage/>}/>
      <Route path='/react/upgrade' element = {<ReactUpgradepage/>}/>
      <Route path='/react/es6' element ={<ReactEs6Page/>}/>
      <Route path = '/react/component' element = {<ReactComponentPage/>}/>
      <Route path="/react/classcomponent" element = {<ReactClassComponentPage/>}/>
      <Route path='/react/usecontextpage' element = {<ReactUsecontextpage/>}/>
      <Route path='/react/state' element ={<ReactStatePage/>}/>
      <Route path='/react/props' element ={<ReactPropsPage/>}/>
      <Route path='/react/event'element ={<ReactEventPage/>}/>
      <Route path='/react/condition' element ={<ReactConditionalRenderPage/>}/>
      <Route path='/react/form' element = {<ReactFormPage/>}/>
      <Route path='/react/jsx' element = {<ReactJsxPage/>}/>
      <Route path='/react/redux' element ={<ReactReduxPage/>}/>
      <Route path='/react/list' element = {<ReactListPage/>}/>
      <Route path='/react/usestate'element = {<ReactUseStatePage/>}/>
      </Route>


      <Route path='/reactsidebar' element = {<ReactSidebar/>}/>
      <Route path='/pythonsidebar' element = {<PythonSidebar/>} />
      <Route path='/compiler' element ={<PythonCompilerPage/>}/>
      </Routes>
    


      </BrowserRouter>
 
    </div>
    </AdBlockProvider>
   
     
  );
}

export default App;
