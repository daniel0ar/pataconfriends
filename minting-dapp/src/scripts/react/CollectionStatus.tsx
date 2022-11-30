import React from 'react';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut;
  }

  render() {
    return (
      <>
        <div className="collection-status">
          
          <div className="supply">
            <span className="label">Disponibles</span>
            {this.props.maxSupply - this.props.totalSupply}
          </div>

          <div className="current-sale">
            <span className="label">Venta</span>
            {this.isSaleOpen() ?
              <>
                {this.props.isWhitelistMintEnabled ? 'Whitelist' : 'Abierta'}
              </>
              :
              'Cerrada'
            }
          </div>
        </div>
      </>
    );
  }
}
