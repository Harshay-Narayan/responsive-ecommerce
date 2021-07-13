import React, { useState,useContext } from "react";
import Footer from "../components/Footer";
import useFormvalidate from "../customHooks/form-validate";
import CartContext from "../store/cart-context";
import classes from "./Checkout.module.css";

const Checkout = () => {
  const cartCtx = useContext(CartContext)
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  console.log(formIsSubmitted);
  const {
    enteredValue: enteredFirstName,
    valueIsValid: isFirstNameValid,
    hasError: isFirstNameHasError,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: firstNameReset,
  } = useFormvalidate((enteredFirstName) => enteredFirstName.trim().length > 0);

  const {
    enteredValue: enteredLastName,
    valueIsValid: isLastNameValid,
    hasError: isLastNameHasError,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useFormvalidate((enteredLastName) => enteredLastName.trim().length > 0);

  const {
    enteredValue: enteredAddress,
    valueIsValid: isAdressValid,
    hasError: isAddressHasError,
    valueBlurHandler: addressBlurHandler,
    valueChangeHandler: addressChangeHandler,
    reset: addressReset,
  } = useFormvalidate((enteredAddress) => enteredAddress.trim().length > 0);

  const {
    enteredValue: enteredCity,
    valueIsValid: isCityValid,
    hasError: isCityHasError,
    valueBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    reset: cityReset,
  } = useFormvalidate((city) => city.trim().length > 0);

  const {
    enteredValue: enteredPIN,
    valueIsValid: isPINValid,
    hasError: isPINHasError,
    valueBlurHandler: PINBlurHandler,
    valueChangeHandler: PINChangeHandler,
    reset: PINReset,
  } = useFormvalidate((pin) => pin.trim().length > 0 && pin.trim().length < 7);

  const {
    enteredValue: enteredemail,
    valueIsValid: isEmailValid,
    hasError: isEmailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useFormvalidate((email) => email.includes("@"));

  const {
    enteredValue: enteredphone,
    valueIsValid: isPhoneValid,
    hasError: isPhoneHasError,
    valueBlurHandler: phoneBlurHandler,
    valueChangeHandler: phoneChangeHandler,
    reset: phoneReset,
  } = useFormvalidate(
    (phone) => phone.trim().length > 0 && phone.trim().length < 11
  );

  const { enteredValue: enteredState, valueChangeHandler: stateChangeHandler } =
    useFormvalidate(()=>{});

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isformValid) {
      return;
    }
    setFormIsSubmitted(true);
    const name = enteredFirstName+" "+enteredLastName;
    const address = enteredAddress+" "+enteredCity+" "+enteredState+" "+enteredPIN;
    const contact = {enteredemail,enteredphone};
    const subtotal = cartCtx.totalAmount - cartCtx.totalDiscountAmount + cartCtx.totalDeliveryCharges
    const cart = {products:cartCtx.products,totalAmountPaid:subtotal}

    console.log({name:name,address:address,contact:contact,cart:cart});
    firstNameReset();
    lastNameReset();
    addressReset();
    cityReset();
    PINReset();
    emailReset();
    phoneReset();

    console.log(formIsSubmitted);
  };

  const firstNameClass =
    isFirstNameHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const lastNameClass =
    isLastNameHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const addressClass =
    isAddressHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const cityClass =
    isCityHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const pinClass =
    isPINHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const emailClass =
    isEmailHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;
  const phoneClass =
    isPhoneHasError && !formIsSubmitted
      ? `${classes.input} ${classes.invalid}`
      : `${classes.input}`;

  const isformValid =
    isFirstNameValid &&
    isLastNameValid &&
    isAdressValid &&
    isCityValid &&
    isPINValid &&
    isEmailValid &&
    isPhoneValid;

  return (
    <div className={classes["main-container"]}>
      {!formIsSubmitted && (
        <div className={classes["checkout-form-container"]}>
          <div className={classes["heading-text"]}>Shipping Information</div>
          <form
            className={classes["form-control"]}
            onSubmit={formSubmitHandler}
          >
            <div>
              <label htmlFor="firstName" className={classes.label}>
                First Name
              </label>
            </div>
            <div>
              <input
                type="text"
                id="firstName"
                className={firstNameClass}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={enteredFirstName}
              />
              {isFirstNameHasError && (
                <p className={classes["error-message"]}>
                  Please Enter a valid First Name
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={classes.label}>
                Last Name
              </label>
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                className={lastNameClass}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredLastName}
              />
            </div>
            {isLastNameHasError && (
              <p className={classes["error-message"]}>
                Please Enter a valid Last Name
              </p>
            )}
            <div>
              <label htmlFor="address" className={classes.label}>
                Address
              </label>
            </div>
            <div>
              <input
                type="text"
                id="adress"
                className={addressClass}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                value={enteredAddress}
              />
            </div>
            {isAddressHasError && (
              <p className={classes["error-message"]}>
                Please Enter a valid Address
              </p>
            )}
            <div>
              <div>
                <label htmlFor="city" className={classes.label}>
                  City
                </label>
              </div>
              <div>
                <input
                  className={cityClass}
                  type="text"
                  id="city"
                  onChange={cityChangeHandler}
                  onBlur={cityBlurHandler}
                  value={enteredCity}
                />
              </div>
              {isCityHasError && (
                <p className={classes["error-message"]}>
                  Please Enter a valid City
                </p>
              )}
              <div>
                <label className={classes.label}>State</label>
              </div>
              <div>
                <select
                  className={classes.select}
                  onChange={stateChangeHandler}
                >
                  <option disabled defaultValue>
                    Select the state
                  </option>
                  <option>Bihar</option>
                  <option>Jharkhand</option>
                  <option>UP</option>
                  <option>Haryana</option>
                </select>
              </div>
              <div>
                <label htmlFor="pin" className={classes.label}>
                  PIN
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="pin"
                  className={pinClass}
                  onBlur={PINBlurHandler}
                  onChange={PINChangeHandler}
                  value={enteredPIN}
                />
              </div>
              {isPINHasError && (
                <p className={classes["error-message"]}>
                  Please Enter a valid 6-digit PIN code
                </p>
              )}
            </div>
            <div>
              <div className={classes["heading-text"]}>Contact Information</div>
              <div>
                <label htmlFor="email" className={classes.label}>
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className={emailClass}
                  onBlur={emailBlurHandler}
                  onChange={emailChangeHandler}
                  value={enteredemail}
                />
              </div>
              {isEmailHasError && (
                <p className={classes["error-message"]}>
                  Please Enter a valid email
                </p>
              )}
              <div>
                <label htmlFor="phone" className={classes.label}>
                  Phone no.
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  className={phoneClass}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                  value={enteredphone}
                />
              </div>
              {isPhoneHasError && (
                <p className={classes["error-message"]}>
                  Please Enter a valid 10-digit Phone number
                </p>
              )}
            </div>
            <div>
              <button type="submit" className={classes.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {formIsSubmitted && (
        <p className={classes["order-placed-message"]}>
          Your Order has been placed :)
        </p>
      )}
      <Footer/>
    </div>
  );
};

export default Checkout;
