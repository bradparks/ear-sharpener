import * as React from 'react';
import pureComponent from '../../utils/pureComponent';
import {getIntervalName} from '../../models/Notes';

import './style.css';

interface Props {
  noteDistance: number;
  onChoose?(noteDistance: number): void;
  guessedCorrectly: boolean;
  guessedIncorrectly: boolean;
}

@pureComponent
export default class NoteDistanceChoice extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {noteDistance, onChoose, guessedCorrectly, guessedIncorrectly} = this.props;

    let className = 'note-distance-choice';
    if (guessedCorrectly) {
      className += ' note-distance-choice--correct';
    }
    if (guessedIncorrectly) {
      className += ' note-distance-choice--incorrect';
    }
    if (!onChoose) {
      className += ' note-distance-choice--disabled';
    }

    return (
      <div className={className} onClick={this.doChoose}>
        <div className="note-distance-choice-content">
          <div>{noteDistance}</div>
          <div className="note-distance-choice-interval-name">{getIntervalName(noteDistance)}</div>
        </div>
      </div>
    );
  }

  doChoose = (): void => {
    if (this.props.onChoose) {
      this.props.onChoose(this.props.noteDistance);
    }
  };
}
