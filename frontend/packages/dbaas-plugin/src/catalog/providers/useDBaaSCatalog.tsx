import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';
import { ExtensionHook, CatalogItem } from '@console/dynamic-plugin-sdk';
import { useK8sWatchResource } from '@console/internal/components/utils/k8s-watch-hook';
import { referenceForModel } from '@console/internal/module/k8s';
import { DBaaSServiceCRName, mongoDBIcon } from '../../const';
import { DBaaSServiceModel } from '../../models';
import { CATALOG_TYPE } from '../const';

const useDBaaSCatalog: ExtensionHook<CatalogItem[]> = ({
  namespace,
}): [CatalogItem[], boolean, any] => {
  const { t } = useTranslation();

  const [dbaasService, loaded, errorMsg] = useK8sWatchResource({
    kind: referenceForModel(DBaaSServiceModel),
    isList: false,
    name: DBaaSServiceCRName,
    namespace,
    namespaced: true,
  });

  const loadedOrError = loaded || errorMsg;
  const services = React.useMemo(() => {
    if (!loaded && !errorMsg) return [];

    const mongoDBAtlasServiceCardDescription = (
      <TextContent>
        <Text component={TextVariants.p}>{t('dbaas-plugin~MongoDBAtlasCardDescription')}</Text>
      </TextContent>
    );

    const mongoDBAtlasServiceDetailsDescription = [
      {
        value: mongoDBAtlasServiceCardDescription,
      },
    ];

    const mongoDBAtlasServiceCard: CatalogItem[] = [
      {
        name: t('dbaas-plugin~Mongo DBaaS'),
        type: CATALOG_TYPE,
        uid: '', //what is this?
        description: t('dbaas-plugin~MongoDBAtlasDescription'),
        provider: 'MongoDB',
        tags: ['mongodb'],
        icon: {
          url: mongoDBIcon,
        },
        cta: {
          label: t('dbaas-plugin~View Instances'),
          href: `/dbaas/ns/${namespace}/mongodb-atlas`,
        },
        details: {
          descriptions: mongoDBAtlasServiceDetailsDescription,
        },
      },
    ];
    return mongoDBAtlasServiceCard;
  }, [loaded, errorMsg, t, namespace, dbaasService]);

  return [services, loadedOrError, undefined];
};

export default useDBaaSCatalog;
