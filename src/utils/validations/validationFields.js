import {required, email, min, max, confirmed} from '@vee-validate/rules';
import {defineRule} from 'vee-validate';
import moment from "moment"
import format from "@popperjs/core/lib/utils/format";
defineRule('required', required);

defineRule('name', (value) => {
    if (required(value) && min(value, {length: 2})) {
        return true
    }
    return 'The name field is required.'
});

defineRule('email', (value) => {
    if (email(value) && required(value)) {
        return true
    }
    return 'A valid email address is required'
});
defineRule('password', (value) => {
    if (required(value) && min(value, {length: 8}) && max(value, {length: 30})) {
        return true
    }
    return 'Password must be between 8 and 30'
});

defineRule('agreement', (value) => {
    if (value && value.length) {
        return true
    }
    return 'The terms field is required.'
});
defineRule('confirmed', (value,  [ctx]) => {
    if (required(value) && confirmed(value, [ctx])) {
        return true
    }
    return 'Password must match'
});
defineRule('endDate', (value, [ctx], context) => {
    if (required(value) && moment(value).isAfter(context.form['startDate'])
    ) {
        return true
    }
    return 'End date field is required and must be granter then start Date'
});
defineRule('startDate', (value) => {
    if (required(value)) {
        return true
    }
    return 'The education start date field is required.'
});