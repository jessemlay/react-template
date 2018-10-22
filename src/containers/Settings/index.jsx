import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {
   translate,
   changeLocale,
   Title,
   resolveBrowserLocale
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';
import { changeTheme } from './actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
   label: { width: '10em', display: 'inline-block' },
   button: { margin: '1em' }
};

class Settings extends React.Component {
   state = {
      autoDetect: localStorage.getItem('locale') === 'browser' ? true : false
   };

   handleLocaleClick = locale => {
      this.setState({ autoDetect: false });
      localStorage.setItem('locale', locale);
   };

   handleAutoDetectChange = name => event => {
      this.props.changeLocale(resolveBrowserLocale());
      this.setState({ [name]: event.target.checked });
      event.target.checked
         ? localStorage.setItem('locale', 'browser')
         : localStorage.removeItem('locale');
   };

   render() {
      const {
         classes,
         theme,
         locale,
         changeTheme,
         changeLocale,
         translate
      } = this.props;
      return (
         <Card>
            <Title title={translate('versa.settings')} />
            <CardContent>
               <div className={classes.label}>
                  {translate('versa.theme.name')}
               </div>
               <Button
                  variant="raised"
                  className={classes.button}
                  color={theme === 'light' ? 'primary' : 'default'}
                  onClick={() => changeTheme('light')}
               >
                  {translate('versa.theme.light')}
               </Button>
               <Button
                  variant="raised"
                  className={classes.button}
                  color={theme === 'dark' ? 'primary' : 'default'}
                  onClick={() => changeTheme('dark')}
               >
                  {translate('versa.theme.dark')}
               </Button>
            </CardContent>
            <CardContent>
               <div className={classes.label}>
                  {translate('versa.language')}
               </div>

               <FormControlLabel
                  control={
                     <Checkbox
                        checked={this.state.autoDetect}
                        color={
                           localStorage.getItem('locale') === null
                              ? 'default'
                              : 'primary'
                        }
                        onChange={this.handleAutoDetectChange('autoDetect')}
                        value="autoDetect"
                     />
                  }
                  label="Auto Detect"
               />

               <Button
                  variant="raised"
                  className={classes.button}
                  color={
                     this.state.autoDetect === false && locale === 'en'
                        ? 'primary'
                        : 'default'
                  }
                  onClick={e => {
                     changeLocale('en');
                     this.handleLocaleClick('en');
                  }}
               >
                  English
               </Button>
               <Button
                  variant="raised"
                  className={classes.button}
                  color={
                     this.state.autoDetect === false && locale === 'es'
                        ? 'primary'
                        : 'default'
                  }
                  onClick={e => {
                     changeLocale('es');
                     this.handleLocaleClick('es');
                  }}
               >
                  Spanish
               </Button>
               <Button
                  variant="raised"
                  className={classes.button}
                  color={
                     this.state.autoDetect === false && locale === 'ar'
                        ? 'primary'
                        : 'default'
                  }
                  onClick={e => {
                     changeLocale('ar');
                     this.handleLocaleClick('ar');
                  }}
               >
                  Arabic
               </Button>
            </CardContent>
         </Card>
      );
   }
}

const mapStateToProps = state => ({
   theme: state.theme,
   locale: state.i18n.locale
});

export default compose(
   connect(
      mapStateToProps,
      {
         changeLocale,
         changeTheme
      }
   ),
   translate,
   withStyles(styles)
)(Settings);
