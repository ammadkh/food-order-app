import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const amountInputRef = useRef();
  const addMealItem = (event) => {
    event.preventDefault();
    const addedAmount = amountInputRef.current.value;
    const addedAmountNumber = +addedAmount;
    if(addedAmount.trim().length < 1 || addedAmountNumber < 1 || addedAmountNumber > 5 ) {
      setInputIsValid(false);
      return;
    }
    props.onAddItem(addedAmountNumber);
  }
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addMealItem}>+ Add</button>
      {!inputIsValid && <p>The value is not valid.</p>}
    </form>
  );
};

export default MealItemForm;