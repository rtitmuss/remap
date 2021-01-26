import React from 'react';
import {
  KeyboardDefinitionManagementActionsType,
  KeyboardDefinitionManagementStateType,
} from './KeyboardDefinitionManagement.container';
import { ProviderContext, withSnackbar } from 'notistack';
import { NotificationItem } from '../../actions/actions';
import { Button, CssBaseline } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Header from './header/Header';
import Content from './content/Content.container';

type OwnProps = {};
type KeyboardDefinitionManagementProps = OwnProps &
  Partial<KeyboardDefinitionManagementStateType> &
  Partial<KeyboardDefinitionManagementActionsType> &
  ProviderContext;
type OwnState = {
  signedIn: boolean;
};

class KeyboardDefinitionManagement extends React.Component<
  KeyboardDefinitionManagementProps,
  OwnState
> {
  private displayedNotificationIds: string[] = [];

  constructor(props: KeyboardDefinitionManagementProps) {
    super(props);
    this.state = {
      signedIn: true,
    };
  }

  private storeDisplayedNotification = (key: string) => {
    this.displayedNotificationIds = [...this.displayedNotificationIds, key];
  };

  private removeDisplayedNotification = (key: string) => {
    this.displayedNotificationIds = [
      ...this.displayedNotificationIds.filter((k) => key !== k),
    ];
  };

  private updateNotifications() {
    this.props.notifications!.forEach((item: NotificationItem) => {
      if (this.displayedNotificationIds.includes(item.key)) return;

      this.props.enqueueSnackbar(item.message, {
        key: item.key,
        variant: item.type,
        autoHideDuration: 5000,
        onExited: (event, key: React.ReactText) => {
          this.props.removeNotification!(key as string);
          this.removeDisplayedNotification(key as string);
        },
        action: (key: number) => (
          <Button
            onClick={() => {
              this.props.closeSnackbar(key);
            }}
          >
            <CloseIcon />
          </Button>
        ),
      });
      this.storeDisplayedNotification(item.key);
    });
  }

  componentDidMount() {
    this.props.auth!.subscribeAuthStatus((user) => {
      if (user) {
        this.setState({
          signedIn: true,
        });
        this.updateNotifications();
        this.props.updateKeyboards!();
      } else {
        this.props.auth!.signInWithGitHub().then(() => {
          // N/A
        });
      }
    });
  }

  componentDidUpdate() {
    this.updateNotifications();
  }

  render() {
    if (this.state.signedIn) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Header />
          <main>
            <Content />
          </main>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <CssBaseline />
          <div className="message-box-wrapper">
            <div className="message-box">
              <p>
                You need to sign in with GitHub account to manage your keyboard
                definitions.
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withSnackbar(KeyboardDefinitionManagement);
