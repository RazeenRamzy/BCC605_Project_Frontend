import React, { useState } from 'react';

// Observer pattern implementation
class InputObserver {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  notify(value) {
    this.observers.forEach(observer => observer(value));
  }
}

const PurchasePage = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Create observers for each input field
  const packageObserver = new InputObserver();
  const nameObserver = new InputObserver();
  const emailObserver = new InputObserver();
  const addressObserver = new InputObserver();


  const handlePackageSelection = packageName => {
    setSelectedPackage(packageName);
    packageObserver.notify(packageName);
  };

  const handleNameChange = event => {
    setName(event.target.value);
    nameObserver.notify(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
    emailObserver.notify(event.target.value);
  };

  const handleAddressChange = event => {
    setAddress(event.target.value);
    addressObserver.notify(event.target.value);
  };

  
  const handlePurchase = () => {
   
    if (!selectedPackage || !name || !email || !address) {
      alert('Please fill in all the required information.');
      return;
    }

  
    console.log('Purchase completed!');
    console.log('Selected Package:', selectedPackage);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);

   
    setSelectedPackage('');
    setName('');
    setEmail('');
    setAddress('');
  };

  // Observer update functions
  const handlePackageUpdate = packageName => {
    setSelectedPackage(packageName);
  };

  const handleNameUpdate = value => {
    setName(value);
  };

  const handleEmailUpdate = value => {
    setEmail(value);
  };

  const handleAddressUpdate = value => {
    setAddress(value);
  };

  // Subscribe observers to input changes
  packageObserver.subscribe(handlePackageUpdate);
  nameObserver.subscribe(handleNameUpdate);
  emailObserver.subscribe(handleEmailUpdate);
  addressObserver.subscribe(handleAddressUpdate);

  return (
    <div>
      <h2>Step 1: Select a Package</h2>
      <ul>
        <li>
          <button onClick={() => handlePackageSelection('Package A')}>
            Package A
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package B')}>
            Package B
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package C')}>
            Package C
          </button>
        </li>
      </ul>

      {selectedPackage && (
        <div>
          <h2>Step 2: Provide Your Information</h2>
          <form>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <br />
            <button onClick={handlePurchase}>Purchase</button>
          </form>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 3: Review Your Order</h2>
          <p>Selected Package: {selectedPackage}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <button onClick={() => alert('Order has been confirmed!')}>
            Confirm Order
          </button>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 4: Make Payment</h2>
          <p>Payment methods:</p>
          <ul>
            <li>Credit Card</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
          </ul>
          <button onClick={() => alert('Payment successful!')}>
            Pay Now
          </button>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 5: Booking Confirmation</h2>
          <p>Your booking has been confirmed!</p>
          <p>Package: {selectedPackage}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 6: Enjoy Your Trip!</h2>
          <p>Have a fantastic journey!</p>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
