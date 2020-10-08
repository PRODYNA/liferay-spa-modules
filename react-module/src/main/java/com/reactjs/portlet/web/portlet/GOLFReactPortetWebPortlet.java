package com.reactjs.portlet.web.portlet;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;
import com.reactjs.portlet.web.constants.GOLFReactPortetWebPortletKeys;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author milos
 */
@Component(
		immediate = true,
		property = {
				"com.liferay.portlet.display-category="+ GOLFReactPortetWebPortletKeys.PORTLET_DISPLAY_CATEGORY,
				"com.liferay.portlet.instanceable=true",
				"com.liferay.portlet.css-class-wrapper=react-portal-web",
				"com.liferay.portlet.single-page-application=false",
				"com.liferay.portlet.footer-portlet-javascript=http://localhost:8081/o/react-portlet-web/webpack.bundle.js",
				"com.liferay.portlet.footer-portlet-javascript=/dist/webpack.bundle.prod.js",
				"javax.portlet.init-param.template-path=/",
				"javax.portlet.init-param.view-template=/view.jsp",
				"javax.portlet.init-param.copy-request-parameters=false",
				"javax.portlet.name.display-name="+ GOLFReactPortetWebPortletKeys.PORTLET_DISPLAY_NAME,
				"javax.portlet.name=" + GOLFReactPortetWebPortletKeys.PORTLET_NAME,
				"javax.portlet.resource-bundle=content.Language",
				"javax.portlet.security-role-ref=power-user,user"
		},
		service = Portlet.class
		)

public class GOLFReactPortetWebPortlet extends MVCPortlet {
}
