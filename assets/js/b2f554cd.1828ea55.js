"use strict";(self.webpackChunktrefle_docs=self.webpackChunktrefle_docs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"1-6-0-released","metadata":{"permalink":"/blog/1-6-0-released","editUrl":"https://github.com/treflehq/documentation/edit/master/blog/blog/2020-07-15-1-6-0.md","source":"@site/blog/2020-07-15-1-6-0.md","title":"1.6.0","description":"This major release of Trefle brings a lot of new exciting features, such as distributions, farming fields and blazing fast search.","date":"2020-07-15T00:00:00.000Z","formattedDate":"July 15, 2020","tags":[{"label":"releases","permalink":"/blog/tags/releases"}],"readingTime":4.265,"hasTruncateMarker":true,"authors":[{"name":"Andr\xe9 Aubin","title":"Trefle Core Team","url":"https://twitter.com/lambda_2","imageURL":"https://pbs.twimg.com/profile_images/1247213607353540608/i9oN_Gbg_400x400.jpg"}],"frontMatter":{"slug":"1-6-0-released","title":"1.6.0","author":"Andr\xe9 Aubin","author_title":"Trefle Core Team","author_url":"https://twitter.com/lambda_2","author_image_url":"https://pbs.twimg.com/profile_images/1247213607353540608/i9oN_Gbg_400x400.jpg","tags":["releases"]}},"content":"This major release of Trefle brings a lot of new exciting features, such as distributions, farming fields and blazing fast search.\\n\\n\x3c!--truncate--\x3e\\n\\n## What changed ?\\n\\n### \ud83d\udce6 Endpoints versioning\\n\\nIn order to avoid making breaking changes like this one in the future, API routes are now versionned. So the endpoint `/api/species` is now `/api/v1/species`. This let you the possibility to update when you\'re ready for the next releases.\\n\\n### \ud83d\udcc4 The data scructure changes\\n\\nOne of the biggest struggles we noticed was the pagination. Parsing the pagination links in the response headers was really painful, even if it\'s a stardard.\\n\\nTo solve this, **we decided to include pagination links directly in the JSON response**.\\n\\nNow, all API calls wraps a `data` field, along with a `links` field, for pagination links, and optionally a `meta` fields, for high level informations such as counts.\\n\\n### \ud83d\udd27 Plant and species fields names changes\\n\\n**We removed and added a lot of fields**. Most of USDA fields, such as `propagation` or products uses were removed, as they were too inaccurates.\\n\\nYou can get:\\n\\n- [A simplified list of the current fields in the documentation](/docs/advanced/plants-fields).\\n- [The full list in the reference](/reference/#operation/getSpecies).\\n\\n\\n### \u2702\ufe0f The filters and sort parameter changes\\n\\nIn order to avoid any name collision in parameters, **filters are now scoped in the `filter` parameter**. This means that `common_name=mint` is now `filter[common_name]=mint`.\\n\\nYou now also can exclude null values from results with the `filter_not[ATTRIBUTE]` parameter.\\n\\nYou can [read more about filters in the documentation](/docs/guides/filtering) or see the [The full list of filters in the reference](/reference/#operation/listSpecies).\\n\\n### \ud83d\udcd0 Ranges and orders\\n\\nYou can now query the range of values between two values with the `range[FIELD]=min,max` parameter.\\n\\nFor example, to query only species with a minimum height **between** 5 **and** 20 centimeters: `api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20`.\\n\\nFiltering on ranges also allow to set only minimum or maximum values. For example:\\n\\n- `/api/v1/species?range[maximum_height_cm]=5` only return species higher than 5 cm\\n- `/api/v1/species?range[maximum_height_cm]=,5` only return species lower than 5 cm\\n\\nYou can [read more about ranges in the documentation](/docs/guides/filtering#filter-on-ranges) or see the [The full list of ranges in the reference](/reference/#operation/listSpecies).\\n\\n\\n### \ud83d\uddbc Better plants/species images\\n\\nImages were fully reviewed, and are now **splitted into categories**: flower, leaf, habit, fruit, bark and other.\\n\\n### \ud83c\udf0d Species distributions\\n\\n**We began to collect plant locations (ex: France) and establishments (ex: Native) per zone**, and they\'re now included in the `/species/{species_slug}` and `/plants/{species_slug}` endpoints.\\n\\nYou can also filter species by distribution zones or by establishment.\\n\\nFor example, to get plants native from Tibet: `/api/v1/distributions/tibet/plants?filter[establishment]=native`.\\n\\n### \ud83d\udd0d Blazing fast search engine\\n\\nA new search endpoint for plants and species is available: `/api/v1/species/search?q=term`.\\n\\n**This search was designed to respond in milliseconds**, and is ready for input autocomplete or \\"as you type\\" queries. [You can see it in action on the landing page](https://trefle.io).\\n\\n### \ud83e\uddf0 Error reporting and data collection\\n\\n**You can now [report errors on species](/docs/guides/reporting-errors), or even [submit corrections / changes](/docs/advanced/complete-data) to us, directly from an API call.**\\n\\nThis means a lot to us, as we want our data to be everyone\'s, and believe strongly in the power of the community.\\n\\n### \ud83d\udcd5 Adoption of better standards\\n\\nAll units are following the [International System of Units (SI)](https://en.wikipedia.org/wiki/Metric_system), so **we replaced feets by centimeters, inches by millimeters and so on**.\\nTemperatures are in celcuis and kelvin degrees for now, as the conversion is more complex than for standard units.\\n\\nScientific names now follows the [Binomial nomenclature](https://en.wikipedia.org/wiki/Binomial_nomenclature). For the species, it represents its genus and its species within the genus, resulting in a single worldwide name for each organism. The scientific name of an infraspecific taxons (ranks below species, such as subspecies, forms, varieties...) is a combination of the name of a species and an infraspecific epithet. A connecting term is used to denote the rank. [See IAPT recommendation](https://www.iapt-taxon.org/nomen/pages/main/art_24.html).\\n\\nDistribution zones for plants/species are following the [World Geographical Scheme for Recording Plant Distributions (WGSRPD)](https://www.tdwg.org/standards/wgsrpd/).\\n\\n### \ud83d\udce6 JSON responses when listing plants and species are more complete\\n\\nWe added some fields in the response, such as an image url or the genus and family names, and embedded synonyms.\\n\\nFor example, when listing plants:\\n\\n```javascript\\n[\\n  {\\n    \\"id\\": 123486,\\n    \\"slug\\": \\"corylus-avellana\\"\\n    \\"scientific_name\\": \\"Corylus avellana\\",\\n    \\"common_name\\": \\"common filbert\\",\\n    \\"complete_data\\": false,\\n    \\"link\\": \\"http://trefle.io/api/plants/123486\\",\\n  }\\n]\\n```\\n\\nIs now\\n\\n```javascript\\n{\\n  \\"data\\": [\\n    {\\n      \\"id\\": 123486,\\n      \\"slug\\": \\"corylus-avellana\\",\\n      \\"scientific_name\\": \\"Corylus avellana\\",\\n      \\"common_name\\": \\"common filbert\\",\\n      \\"author\\": \\"L.\\",\\n      \\"bibliography\\": \\"Sp. Pl.: 998 (1753)\\",\\n      \\"family\\": \\"Betulaceae\\",\\n      \\"family_common_name\\": \\"Birch family\\",\\n      \\"genus\\": \\"Corylus\\",\\n      \\"genus_id\\": 2057,\\n      \\"image_url\\": \\"https://bs.floristic.org/image/o/0d92cadb0d66dce1b0a8b26913125d6501e31d68\\",\\n      \\"rank\\": \\"species\\",\\n      \\"status\\": \\"accepted\\",\\n      \\"synonyms\\": [\\n        \\"Corylus sylvestris\\"\\n      ],\\n      \\"year\\": 1753,\\n      \\"links\\": {\\n          \\"genus\\": \\"/api/v1/genus/corylus\\",\\n          \\"plant\\": \\"/api/v1/plants/corylus-avellana\\",\\n          \\"self\\": \\"/api/v1/species/corylus-avellana\\"\\n      }\\n    }\\n  ],\\n  \\"links\\": {\\n    \\"first\\": \\"/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana&page=1\\",\\n    \\"last\\": \\"/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana&page=1\\",\\n    \\"self\\": \\"/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana\\"\\n  },\\n  \\"meta\\": {\\n    \\"total\\": 1\\n  }\\n}\\n```\\n\\n### \ud83d\udccb Synonyms separation\\n\\nSynonyms are no longer returned in the species or plants response, and are now included as an array in the response.\\n\\n### \ud83d\udcd0 Species fields scales changes\\n\\n\\"Scale-like\\" fields, such as \\"light\\" or \\"soil adaptation\\" are no longer with values like \'Low\', \'Medium\' and \'High\', but are now on a scale from 0 to 10.\\n\\n### \ud83d\udccb Common names split\\n\\nCommon names have been reviewed, and are now grouped by language."}]}')}}]);