import React from 'react';
import { Redirect } from 'react-router-dom';
import Clients from '../../components/Clients';
import IndexBrowser from '../../components/IndexBrowser';
import HelmetTitle from '../../components/HelmetTitle';
import EntryView from './EntryView';

const View = ({ match, credentials, history, location }) => {
  const [ns, nsId] = location.hash.slice(1).split('/');

  if (ns && nsId) {
    return <Redirect to={`/index/artifacts/${ns}/${nsId}`} />;
  } else if (ns) {
    return <Redirect to={`/index/artifacts/${ns}`} />;
  }

  const { namespace = '', namespaceTaskId } = match.params;

  return (
    <Clients credentials={credentials} Index Queue>
      {({ index, queue }) => (
        <div>
          <HelmetTitle title="Indexed Artifact Browser" />
          <IndexBrowser
            urlRoot="/index/artifacts"
            history={history}
            credentials={credentials}
            index={index}
            namespace={namespace}
            namespaceTaskId={namespaceTaskId}>
            <EntryView
              index={index}
              queue={queue}
              namespace={namespace}
              namespaceTaskId={namespaceTaskId}
              credentials={credentials} />
          </IndexBrowser>
        </div>
      )}
    </Clients>
  );
};

export default View;
