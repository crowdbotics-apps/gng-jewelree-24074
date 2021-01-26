import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList196789Navigator from '../features/ArticleList196789/navigator';
import ArticleList196788Navigator from '../features/ArticleList196788/navigator';
import ArticleList196787Navigator from '../features/ArticleList196787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList196789: { screen: ArticleList196789Navigator },
ArticleList196788: { screen: ArticleList196788Navigator },
ArticleList196787: { screen: ArticleList196787Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
