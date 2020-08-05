import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Button, Table } from 'antd'
import { licenseLogic } from './licenseLogic'
import { useValues } from 'kea'

const columns = [
    {
        title: 'Active',
        render: function renderActive(license: any) {
            return license.valid_until > new Date() ? 'active' : 'expired'
        },
    },
]

export const Licenses = hot(_Licenses)
function _Licenses(): JSX.Element {
    const { licenses, licensesLoading } = useValues(licenseLogic)
    return (
        <div>
            <h1 className="page-header">Licenses</h1>
            <p style={{ maxWidth: 600 }}>
                <i>
                    Here you can add and manage your PostHog enterprise licenses. By adding a license key, you'll be
                    able to unluck enterprise functionality in PostHog right away!
                    <br />
                    <br />
                    Contact <a href="mailto:sales@posthog.com">sales@posthog.com</a> to buy a key.
                </i>
            </p>
            <Button className="mb-4" type="primary" data-attr="create-annotation" onClick={(): void => setOpen(true)}>
                Create new license
            </Button>
            <Table
                data-attr="license-table"
                size="small"
                rowKey={(item): string => item.id}
                pagination={{ pageSize: 99999, hideOnSinglePage: true }}
                rowClassName="cursor-pointer"
                dataSource={licenses}
                columns={columns}
                loading={licensesLoading}
            />
        </div>
    )
}
