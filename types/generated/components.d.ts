import type { Schema, Struct } from '@strapi/strapi';

export interface MetricsMetrics extends Struct.ComponentSchema {
  collectionName: 'components_metrics_metrics';
  info: {
    displayName: 'metrics';
  };
  attributes: {
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface PlatformSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_platform_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'metrics.metrics': MetricsMetrics;
      'platform.social-links': PlatformSocialLinks;
    }
  }
}
