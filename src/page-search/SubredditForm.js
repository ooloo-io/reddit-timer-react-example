import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../common/button';
import { Form, Label, Input } from './SubredditForm.style';

function SubredditForm() {
  const { subreddit: initialSubreddit } = useParams();

  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const onChange = (event) => setSubreddit(event.target.value);

  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${subreddit}`);
  };

  // update input value when URL is updated externally
  // (e.g. when user clicks on search link in header)
  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        r /
        <Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={onChange}
        />
      </Label>

      <Button type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SubredditForm;
