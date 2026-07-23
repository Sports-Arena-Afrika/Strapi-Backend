import type { Schema, Struct } from '@strapi/strapi';

export interface SharedExternalLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_external_links';
  info: {
    displayName: 'External Link';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'shared.media', false>;
    kicker: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    externalLink: Schema.Attribute.Component<'shared.external-link', false>;
    strapiFile: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProviderLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_provider_links';
  info: {
    displayName: 'Provider Link';
  };
  attributes: {
    embedUrl: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['spotify', 'apple', 'youtube', 'amazon', 'rss']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Component<'shared.media', false>;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    slides: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team Score';
  };
  attributes: {
    abbreviation: Schema.Attribute.String;
    finalScore: Schema.Attribute.String;
    predictedScore: Schema.Attribute.String & Schema.Attribute.Required;
    teamName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.external-link': SharedExternalLink;
      'shared.header': SharedHeader;
      'shared.media': SharedMedia;
      'shared.provider-link': SharedProviderLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team': SharedTeam;
    }
  }
}
