import React from 'react';
import { registerComponent } from '../../lib/vulcan-lib'
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { isAlgoliaEnabled, getSearchClient } from '../../lib/search/algoliaUtil';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest, { OnSuggestionSelected } from 'react-autosuggest';

const styles = (theme: ThemeType): JssStyles => ({
  autoComplete: {
    '& input': {
      ...theme.typography.body2,
      backgroundColor: "transparent"
    },
    "& li": {
      listStyle: "none",
    },
    "& .react-autosuggest__suggestion--highlighted": {
      backgroundColor: theme.palette.panelBackground.darken05,
    },
    "& ul": {
      marginLeft: 0,
      paddingLeft: 0,
    },
  }
});

const SearchAutoComplete = ({ clickAction, placeholder, noSearchPlaceholder, renderSuggestion, hitsPerPage=7, indexName, classes, renderInputComponent, filters }: {
  clickAction: (_id: string, object: any) => void,
  placeholder: string,
  noSearchPlaceholder: string,
  renderSuggestion: any,
  hitsPerPage?: number,
  indexName: string,
  classes: ClassesType,
  renderInputComponent?: any,
  filters?: string,
}) => {
  if (!isAlgoliaEnabled()) {
    // Fallback for when Algolia is unavailable (ie, local development installs).
    // This isn't a particularly nice UI, but it's functional enough to be able
    // to test other things.
    return <input type="text" placeholder={noSearchPlaceholder} onKeyPress={ev => {
      if (ev.charCode===13) {
        const id = (ev.target as HTMLInputElement).value;
        clickAction(id, null);
        ev.preventDefault();
      }
    }}/>;
  }
  
  const onSuggestionSelected: OnSuggestionSelected<any> = (event, { suggestion }) => {
    event.preventDefault();
    event.stopPropagation();
    clickAction(suggestion._id, suggestion)
  }
  return <InstantSearch
    indexName={indexName}
    searchClient={getSearchClient()}
  >
    <div className={classes.autoComplete}>
      { /* @ts-ignore */ }
      <AutocompleteTextbox onSuggestionSelected={onSuggestionSelected} placeholder={placeholder} renderSuggestion={renderSuggestion} renderInputComponent={renderInputComponent}/>
      <Configure hitsPerPage={hitsPerPage} filters={filters}/>
    </div>
  </InstantSearch>
}

const AutocompleteTextbox = connectAutoComplete(
  ({
    // From connectAutoComplete HoC
    hits, currentRefinement, refine,
    // From SearchAutoComplete
    // Extra props that DefinitelyTyped didn't annotate, but which we do pass
    // (in the usage in SearchAutoComplete above). We could maybe eliminate the
    // need for this ts-ignore by merging the functions.
    // @ts-ignore
    onSuggestionSelected, placeholder, renderSuggestion, renderInputComponent
  }) => {
    return (
      <Autosuggest
        suggestions={hits}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsFetchRequested={({ value }) => refine(value)}
        onSuggestionsClearRequested={() => refine('')}
        getSuggestionValue={hit => hit.title}
        renderInputComponent={renderInputComponent}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: placeholder,
          value: currentRefinement,
          onChange: () => {},
        }}
        highlightFirstSuggestion
      />
    );
  }
);

const SearchAutoCompleteComponent = registerComponent("SearchAutoComplete", SearchAutoComplete, {styles});

declare global {
  interface ComponentTypes {
    SearchAutoComplete: typeof SearchAutoCompleteComponent
  }
}

