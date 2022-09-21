import { render } from 'test/test-utils';
import { Alert } from './Alert';

describe('Example', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Alert status="error" primaryText="There was an error" secondaryText="Very sorry about that." />,
      {}
    );
    expect(container).toBeInTheDocument();
  });
});
