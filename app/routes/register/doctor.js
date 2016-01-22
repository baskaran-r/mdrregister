import Ember from 'ember';
import EmberValidator from 'ember-validator';
import Doctor from 'mdrregister/models/doctor';
import Api from 'mdrregister/mixins/api';
import { animateTo } from 'mdrregister/utility/utils';

const {
  Route
} = Ember;

export default Route.extend(EmberValidator, Api, {
  model() {
    return Doctor.create();
  },

  _validations() {
    return {
      agency_id: {
        required: 'Agency Id is required.'
      },

      npi: {
        required: 'NPI is required.'
      },

      medicaid_number: {
        required: 'Medicaid number is required.'
      },

      medicare_number: {
        required: 'Medicare number is required.'
      },

      user_name: {
        required: 'User name is required.'
      },

      password: {
        required: 'password is required'
      },

      last_name: {
        length: {
          maximum: 50,
          message: 'Must be 50 characters or less.'
        }
      },

      first_name: {
        required: 'First name is required.',
        length: {
          minimum: 3,
          maximum: 50,
          messages: {
            minimum: 'Must be 3 characters or more.',
            maximum: 'Must be 50 characters or less.'
          }
        }
      },

      email_id: {
        length: {
          maximum: 50,
          message: 'Must be 50 characters or less.'
        },
        email: 'Email id is not valid.'
      },

      dob: {
        required: 'DOB is required.',
      },

      phone1: {
        required: 'Phone no is required',
        phone: {
          format9: true,
          message: 'Phone no is not valid(NNNNNNNNNN).'
        }
      },

      phone2: {
        phone: {
          format9: true,
          message: 'Phone no is not valid(NNNNNNNNNN).'
        }
      },

      address1: {
        required: 'Address is required.',
        length: {
          maximum: 250,
          message: 'Must be 250 characters or less.'
        }
      },

      selected_state_1: {
        required: 'State is required.'
      },

      city1: {
        required: 'City is required.'
      },

      zip1: {
        required: 'Zip is required',
        zip: 'Zip is not valid(NNNNN or NNNNN-NNNN).'
      }
    };
  },

  actions: {
    add() {
      const model       = this.get('controller.model');
      const validations = this._validations();
      const self        = this;
      let data          = {};

      model.set('validationResult', null);

      self.validateMap({ model, validations }).then(() => {
        self.transitionTo("confirmation");
      }).catch((validationResult) => {
        animateTo();
        model.set('validationResult', validationResult);
      });
    }
  }
});
