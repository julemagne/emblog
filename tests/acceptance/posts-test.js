import { test } from 'qunit';
import moduleForAcceptance from 'emblog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts test');

test('visiting /', function(assert) {
	visit('/');
	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});

test('should link to posts archive.', function (assert) {
  visit('/');
  click('a:contains("Browse All")');
  andThen(function () {
    assert.equal(currentURL(), '/posts', 'should navigate to posts');
  });
});
