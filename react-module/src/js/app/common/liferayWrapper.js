/**
 * This file wraps all calls to the Liferay JS Api, e.g. Liferay.Language.get('')
 * to be able to mock those calls in a non Liferay environment.
 */
class LiferayWrapper {


    /**
     * Inject parameters in parameterized language values. Parameters may be other language keys.
     *
     * For example:
     *
     * <code>
     * langValue=This is a {0}
     *
     * LiferayWrapper.getLanguage('langValue', "test") === "This is a test"
     * </code>
     * @param key {string} Language key
     * @param parameters [string] Parameters
     */
    getLanguage(key, ...parameters) {
        let value = Liferay.Language.get(key);

        for (let i = 0; i < parameters.length; i++) {
            value = value.replace(/{\d}/, Liferay.Language.get(parameters[i]));
        }

        return value;
    }


    getLayoutRelativeURL() {
        return Liferay.ThemeDisplay.getLayoutRelativeURL();
    }

    /**
     * Reads the current logged in user from Liferay.
     *
     * @see https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/invoking-liferay-services
     */
    getCurrentUser = async () => {
        return await Liferay.Service('/user/get-current-user', {});
    };

    /**
     * Returns the first section (en of en_GB) of the locale of the logged in user.
     */
    getUserLocale = () => {
        return this.getCurrentUser().then((portalUser) => {
            return portalUser.languageId.split('_')[0];
        });
    };

    /**
     * Returns the timezone from the user Profile.
     */
    getUserTimezone = () => {
        return this.getCurrentUser().then((portalUser) => {
            return portalUser.timeZoneId;
        });
    }

}

export default new LiferayWrapper();
